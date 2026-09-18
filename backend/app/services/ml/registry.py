"""Lazy, thread-safe registry for teammate-trained ML models.

Model binaries (``.pkl`` / ``.joblib``) are intentionally NOT in git
(see ``docs/MODELS.md``). Place them under ``ml/models/`` (repo root) or
point ``MODEL_DIR`` env var at the teammate OneDrive folder. Missing files
never crash the app — :func:`model_available` returns False and predictors
fall back or answer 503 with a clear message.
"""

from __future__ import annotations

import logging
import os
import threading
from pathlib import Path
from typing import Any

logger = logging.getLogger("buildai.ml")

_BACKEND_DIR = Path(__file__).resolve().parent.parent.parent
_REPO_ROOT = _BACKEND_DIR.parent


def model_dir() -> Path:
    custom = os.environ.get("MODEL_DIR")
    if custom:
        return Path(custom)
    return _REPO_ROOT / "ml" / "models"


# logical name -> (model file, features file or None)
MODEL_FILES: dict[str, tuple[str, str | None]] = {
    "safety_risk": ("safety_risk_model.pkl", "safety_risk_features.pkl"),
    "injury": ("injury_prediction_model.pkl", "injury_prediction_features.pkl"),
    "delay": ("delay_prediction_model.joblib", "delay_feature_info.json"),
    "cost": ("cost_prediction_model.joblib", "feature_info.json"),
    "schedule": ("schedule_delay_prediction_model.pkl", None),
    "project_delay": ("project_delay_prediction_model.pkl", None),
    "resource": ("resource_equipment_shortage_model.pkl", None),
    "compliance": ("compliance_model.pkl", None),
    "insurance": ("insurance_model.pkl", None),
}

_cache: dict[str, tuple[Any, Any]] = {}
_lock = threading.Lock()


class ModelNotAvailableError(RuntimeError):
    """Raised when a requested model file is absent or unloadable."""


def model_available(name: str) -> bool:
    """True when the model file exists on disk (no loading attempted)."""
    entry = MODEL_FILES.get(name)
    if entry is None:
        return False
    return (model_dir() / entry[0]).exists()


def registered_models() -> list[dict]:
    """Status list for ``GET /api/ml/models`` (never raises)."""
    out: list[dict] = []
    base = model_dir()
    for name, (model_file, features_file) in MODEL_FILES.items():
        model_path = base / model_file
        out.append(
            {
                "name": name,
                "available": model_path.exists(),
                "model_file": model_file,
                "features_file": features_file,
                "loaded": name in _cache,
            }
        )
    return out


def get_model(name: str) -> tuple[Any, Any]:
    """Load (once, thread-safe) and return ``(model, features)``.

    ``features`` is the auxiliary artifact (feature list / metadata dict /
    None). Raises :class:`ModelNotAvailableError` when unavailable.
    """
    with _lock:
        if name in _cache:
            return _cache[name]
        entry = MODEL_FILES.get(name)
        if entry is None:
            raise ModelNotAvailableError(f"Unknown model: {name}")
        model_file, features_file = entry
        model_path = model_dir() / model_file
        if not model_path.exists():
            raise ModelNotAvailableError(
                f"Model '{name}' not found at {model_path}. "
                "Place .pkl/.joblib files under ml/models/ (see docs/MODELS.md) "
                "or set MODEL_DIR env var."
            )
        try:
            import joblib
        except ImportError as e:
            raise ModelNotAvailableError(
                "joblib/scikit-learn not installed. "
                "Install with: pip install -r requirements-ml.txt"
            ) from e
        try:
            model = joblib.load(model_path)
        except Exception as e:
            raise ModelNotAvailableError(
                f"Failed to load model '{name}': {e}"
            ) from e
        features: Any = None
        if features_file:
            features_path = model_dir() / features_file
            if features_path.exists():
                try:
                    if features_path.suffix == ".json":
                        import json

                        features = json.loads(features_path.read_text())
                    else:
                        features = joblib.load(features_path)
                except Exception as e:  # noqa: BLE001 — auxiliary only
                    logger.warning("Could not load features for %s: %s", name, e)
        _cache[name] = (model, features)
        return _cache[name]
