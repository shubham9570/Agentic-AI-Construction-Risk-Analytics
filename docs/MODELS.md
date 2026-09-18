# 🧠 ML Models — Setup & Reference

Trained models live **outside git** (see `.gitignore`: `*.pkl`, `*.joblib`,
`*.pt`, `ml/models/`). Copy teammate binaries locally, then the API serves
them via `GET /api/ml/models` and `POST /api/ml/predict/*`.

## Where to put files

```
<repo-root>/ml/models/
├── safety_risk_model.pkl + safety_risk_features.pkl
├── injury_prediction_model.pkl + injury_prediction_features.pkl
├── delay_prediction_model.joblib + delay_feature_info.json
├── cost_prediction_model.joblib + feature_info.json
├── schedule_delay_prediction_model.pkl
├── project_delay_prediction_model.pkl
├── resource_equipment_shortage_model.pkl
├── compliance_model.pkl
└── insurance_model.pkl
```

Or set `MODEL_DIR` env var to the teammate OneDrive folder directly.

## Install (one-time)

```bash
cd backend
pip install -r requirements-ml.txt   # ultralytics, opencv, scikit-learn, torch
```

Core API works without this — only `/api/ppe/*` and `/api/ml/*` need it.
Without model files these endpoints answer `503` with setup guidance.

## Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `MODEL_DIR` | `<repo>/ml/models` | Folder with `.pkl`/`.joblib` binaries |
| `PPE_MODEL_PATH` | `ppe_model/ppe_detection_best.pt` | YOLO `.pt` file path |
| `PPE_ALARM_ENABLED` | `false` | Play alarm sound on violation |
| `PPE_ALARM_SOUND` | `sounds/mixkit-emergency-alert-alarm-1007.wav` | Alarm audio file |
| `PPE_LOG_PATH` | `logs/violations.csv` | Violation CSV log path |

## Example calls (all need `Authorization: Bearer <token>`)

```bash
# 1. Check what's available
curl -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/ml/models

# 2. Safety-risk prediction (typed schema)
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"helmet":1,"vest":1,"gloves":0,"safety_shoes":1}' \
  http://localhost:8000/api/ml/predict/safety-risk

# 3. Delay prediction (typed schema)
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"workers":109,"budget":25080668,"progress":84,"weather_rain":0,"weather_sunny":1}' \
  http://localhost:8000/api/ml/predict/delay

# 4. Generic feature-dict model (injury/schedule/resource/compliance/...)
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"features":{"Workers":109,"Budget":25080668}}' \
  http://localhost:8000/api/ml/predict/resource

# 5. PPE health + image detection
curl -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/ppe/health
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -F "file=@site-photo.jpg" \
  http://localhost:8000/api/ppe/detect
```

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `503 Model ... not found` | Copy the `.pkl`/`.joblib` into `ml/models/` (exact filenames in table above) |
| `503 ultralytics/opencv not installed` | `pip install -r backend/requirements-ml.txt` |
| `503 PPE model not found` | Set `PPE_MODEL_PATH` to the YOLO `.pt` file |
| `joblib load fails / version warning` | Match teammate's sklearn version (`pip install "scikit-learn~=1.5.0"`) |
| Empty `{}` features accepted but wrong result | Generic endpoints use model column order — pass full feature dict |

## Model cards (from teammate metadata)

| # | Endpoint | Model | Features | Metrics |
|---|----------|-------|----------|---------|
| 1 | `predict/safety-risk` | GradientBoostingClassifier, 1000 rows | Helmet, Vest, Gloves, Safety_Shoes, Accident → Risk_Level (High/Low/Medium) | — |
| 2 | `predict/injury` | LogisticRegression v1.0 | 29 one-hot cols (Division, Cause, Working/Machine condition, Observation/Incident type) | — |
| 3 | `predict/delay` | GradientBoostingClassifier | Workers, Budget, Progress, Weather_Rain, Weather_Sunny → Delay Yes/No | — |
| 4 | `predict/cost` | RandomForestClassifier | MaterialCost, LaborCost, EquipmentCost, Budget → Overrun | — |
| 5 | `predict/schedule` | schedule_delay_prediction_model.pkl | Generic feature dict (model order) | — |
| 6 | `predict/project-delay` | project_delay_prediction_model.pkl | Generic feature dict | `project_delay_requirements.txt` alongside |
| 7 | `predict/resource` | resource_equipment_shortage_model.pkl | Generic feature dict | `requirements.txt` alongside |
| 8 | `predict/compliance` | RandomForestClassifier v1.0, 76,310 rows | Pipeline-internal preprocessing | cv_acc 0.8421, F1 0.624 |
| 9 | `predict/insurance` | RandomForestClassifier v1.0, 58,592 rows | Pipeline-internal preprocessing | cv_acc 0.6901, ROC-AUC 0.638 |

> ⚠️ Compliance/insurance models are **decision-support only**, not legal or
> underwriting advice (per teammate `milestone_3_metadata.json`).

## PPE vision model

- File: `ppe_detection_best.pt` (YOLO) → `ppe_model/` locally or `PPE_MODEL_PATH` env.
- `GET /api/ppe/health` reports availability; `POST /api/ppe/detect` needs
  `opencv-python` from `requirements-ml.txt`.
