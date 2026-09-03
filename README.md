# 🏗️ Agentic AI — Construction Risk Analytics

AI-powered construction intelligence platform for proactive site risk monitoring, worker safety, and intelligent project management.

---

## 📂 Monorepo Structure

```
Agentic-AI-Construction-Risk-Analytics/
├── backend/          # FastAPI + PostgreSQL (Neon) — REST API
├── frontend/         # React 19 + Vite — Dashboard UI
├── datasets/         # CSV data (training + seed source)
└── .gitignore
```

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | React 19, Vite, React Router 7, Chart.js, React Icons |
| **Backend** | Python 3.11+, FastAPI, SQLAlchemy 2.0, Pydantic v2 |
| **Auth** | JWT (python-jose) + bcrypt |
| **Database** | PostgreSQL (Neon Cloud, SSL) |
| **DB Driver** | psycopg v3 (binary) |

---

## 🚀 Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
python seed.py                  # seed DB from CSVs + hardcoded data
uvicorn app.main:app --reload --port 8000
```
- Swagger: http://localhost:8000/docs
- Health: http://localhost:8000/health

### Frontend
```bash
cd frontend
npm install
npm run dev
```
- App: http://localhost:5173 (Vite proxies `/api/*` → `http://localhost:8000`)

---

## 📚 API Routes

Public: `/`, `/health`, `/api/auth/register`, `/api/auth/login`

Protected (JWT Bearer):
- `/api/dashboard/*` — KPIs, charts, gauges, trends
- `/api/projects/*` — list, detail, summary, performance
- `/api/milestones`, `/api/alerts/*`, `/api/recommendations`
- `/api/hazards`, `/api/zones`, `/api/risks/*`
- `/api/aihub/*` — modules, insights, overview
- `/api/reports/*` — summary, performance, history, insight

Full list at `/docs`.

---

## 🔐 Auth

1. Register: `POST /api/auth/register` `{email, password, full_name}`
2. Login: `POST /api/auth/login` (form-data: `username=<email>`, `password`) → `{access_token}`
3. Use `Authorization: Bearer <token>` for all protected routes.

---

## 🗃️ Data

Frontend JSX has zero `fetch` calls — all data is hardcoded visually. Backend exposes endpoints with **exact same shape** so a future integration just adds `useEffect(fetch(...))` per component.

DB is seeded from:
- `datasets/projects.csv` → `projects` table
- `datasets/weather_history.csv` → aggregated into `risk_trends`
- `seed.py` (hardcoded) → KPIs, alerts, recommendations, incidents, etc.
