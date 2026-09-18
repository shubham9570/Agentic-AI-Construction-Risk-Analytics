"""In-process safety-risk prediction (replaces teammate subprocess worker).

Teammate ``risk_predictor.py`` shelled out to a separate venv python running
``risk_worker.py``. Here we call the shared ML registry in-process; when the
model file is absent we fall back to a transparent PPE-count heuristic so the
endpoint never crashes.
"""

from __future__ import annotations

import logging

logger = logging.getLogger("buildai.ppe")


def predict_safety_risk(
    helmet: bool,
    vest: bool,
    gloves: bool,
    safety_shoes: bool,
    accident: bool = False,
) -> dict:
    """Return ``{"risk": str, "source": "model"|"heuristic"}``."""
    features = {
        "helmet": int(bool(helmet)),
        "vest": int(bool(vest)),
        "gloves": int(bool(gloves)),
        "safety_shoes": int(bool(safety_shoes)),
        "accident": int(bool(accident)),
    }
    try:
        from app.services.ml.registry import get_model, model_available

        if model_available("safety_risk"):
            model, feature_names = get_model("safety_risk")
            import pandas as pd

            row = {
                "Helmet": features["helmet"],
                "Vest": features["vest"],
                "Gloves": features["gloves"],
                "Safety_Shoes": features["safety_shoes"],
                "Accident": features["accident"],
            }
            data = pd.DataFrame([row])[list(feature_names)]
            return {"risk": str(model.predict(data)[0]), "source": "model"}
    except Exception as e:  # noqa: BLE001 — fall back to heuristic
        logger.info("Safety model unavailable, using heuristic: %s", e)

    missing = 4 - (
        features["helmet"]
        + features["vest"]
        + features["gloves"]
        + features["safety_shoes"]
    )
    if features["accident"] or missing >= 3:
        risk = "High"
    elif missing >= 1:
        risk = "Medium"
    else:
        risk = "Low"
    return {"risk": risk, "source": "heuristic"}
