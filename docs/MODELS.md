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
