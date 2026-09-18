"""PPE alert + alarm helpers (ported from teammate D-drive).

Changes vs original:
- :func:`play_alarm` is cross-platform (Windows ``winsound`` / Linux ``aplay`` /
  macOS ``afplay``) with graceful log-only fallback.
- Controlled by ``PPE_ALARM_ENABLED`` env var (default ``false`` on servers).
- Violation state-machine helper for "alert once per continuous violation".
"""

from __future__ import annotations

import logging
import os
import platform
import subprocess

logger = logging.getLogger("buildai.ppe")


def check_ppe(worker: dict, risk: str = "Unknown") -> str:
    """Build a human-readable PPE status message for one worker."""
    from app.services.ppe.detector import missing_ppe

    missing = missing_ppe(worker)
    if not missing:
        message = "Worker is Safe"
    else:
        message = "PPE Missing: " + ", ".join(missing)
    return f"{message} | Safety Risk: {risk}"


def play_alarm(status: str, sound_file: str | None = None) -> bool:
    """Play an alarm sound if ``status`` indicates a violation.

    Returns True when a sound was actually played, False otherwise
    (disabled, no violation, or playback failed — never raises).
    """
    if os.environ.get("PPE_ALARM_ENABLED", "false").lower() not in (
        "1",
        "true",
        "yes",
        "on",
    ):
        return False
    if "Missing" not in status and "VIOLATION" not in status:
        return False
    sound = sound_file or os.environ.get(
        "PPE_ALARM_SOUND", "sounds/mixkit-emergency-alert-alarm-1007.wav"
    )
    try:
        system = platform.system()
        if system == "Windows":
            import winsound

            winsound.PlaySound(sound, winsound.SND_FILENAME | winsound.SND_ASYNC)
        elif system == "Darwin":
            subprocess.run(["afplay", sound], check=False, timeout=10)
        else:
            subprocess.run(["aplay", sound], check=False, timeout=10)
        logger.warning("PPE alarm triggered: %s", status)
        return True
    except Exception as e:  # noqa: BLE001 — alarm must never crash the pipeline
        logger.warning("Alarm playback failed (continuing without sound): %s", e)
        return False


class ViolationTracker:
    """Alert-once-per-continuous-violation state machine.

    Mirrors the logic from teammate ``video_monitor.py`` but reusable and
    testable without OpenCV.
    """

    def __init__(self) -> None:
        self.violation_active = False

    def update(self, has_violation: bool) -> str:
        """Return 'started' | 'ongoing' | 'cleared' | 'clear'."""
        if has_violation and not self.violation_active:
            self.violation_active = True
            return "started"
        if has_violation:
            return "ongoing"
        if self.violation_active:
            self.violation_active = False
            return "cleared"
        return "clear"
