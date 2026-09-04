# 🏗️ BuildAI — Agentic AI Construction Risk Analytics

> AI-powered construction intelligence platform for proactive site risk monitoring, worker safety, and intelligent project management.

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688.svg)](https://fastapi.tiangolo.com)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB.svg)](https://react.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791.svg)](https://neon.tech)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](#-license)

A full-stack monorepo delivering real-time risk intelligence, AI-driven safety monitoring, and predictive analytics for construction sites. The platform combines a React 19 dashboard with a FastAPI backend, backed by Neon PostgreSQL and seeded from historical project + weather datasets.

---

## ✨ Key Features

- 🏠 **Command Center Dashboard** — 4 KPI cards (risk score, safety compliance, active hazards, live alerts) at a glance
- 📊 **Risk Trend Analytics** — 7-day rolling line chart with current vs. previous week comparison
- ⚠️ **AI Risk Gauge** — Real-time donut indicator with auto-calculated risk level
- 📈 **Project Progress** — 5-phase construction milestone bar chart
- 🚨 **Live AI Alerts** — Critical / Warning / Info / Resolved alert stream with timestamps
- 🤖 **AI Recommendations** — Priority-ranked safety actions (HIGH / MEDIUM / LOW)
- 👷 **Safety Intelligence** — PPE detection, hazard detection, worker monitoring, live camera
- 🗺️ **Risk Center** — Zone-wise risk distribution with severity classification
- 🧠 **AI Hub** — 6 AI intelligence modules (Safety, Weather, Schedule, Cost, Resource, Quality)
- 📄 **Reports** — Performance metrics, AI insight summaries, downloadable report history
- 🔐 **JWT Authentication** — Secure register / login flow with bearer token protection
- 🌱 **CSV Seeding** — Database populated from real `projects.csv` + `weather_history.csv`

---

## 🏗️ Architecture

```
┌──────────────────┐         ┌────────────────────┐         ┌──────────────────────┐
│   Browser        │         │   Vite Dev Server  │         │   FastAPI Backend    │
│  React 19 SPA    │  HTTP   │   localhost:5173   │  Proxy  │   localhost:8000     │
│  (Hardcoded JSX) │ ◄─────► │   /api/* proxy     │ ◄─────► │   30 REST endpoints  │
└──────────────────┘         └────────────────────┘         └──────────┬───────────┘
                                                                         │ SQL (SSL)
                                                                         ▼
                                                              ┌──────────────────────┐
                                                              │  Neon PostgreSQL     │
                                                              │  16 tables, seeded   │
                                                              └──────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer       | Technology                                          | Version          |
|-------------|-----------------------------------------------------|------------------|
| **Frontend**| React                                               | 19.2.8           |
|             | Vite (build + dev server + proxy)                   | 8.2.0            |
|             | React Router DOM                                    | 7.18.2           |
|             | Chart.js + react-chartjs-2                          | 4.5 / 5.3        |
|             | React Icons                                         | 5.7.0            |
| **Backend** | Python                                              | 3.11+            |
|             | FastAPI                                             | 0.115+           |
|             | Uvicorn (ASGI server)                               | 0.32+            |
|             | SQLAlchemy 2.0 (declarative ORM)                    | 2.0.36+          |
|             | Pydantic v2                                         | 2.9+             |
|             | pydantic-settings                                   | 2.6+             |
| **Auth**    | python-jose (JWT) + bcrypt                          | 3.3 / 4.0        |
| **DB**      | PostgreSQL via Neon Cloud (SSL)                     | 14+              |
|             | psycopg v3 (binary driver)                          | 3.2+             |
| **Data**    | pandas (CSV ingestion in seed.py)                   | 2.0+             |

---

## 📂 Repository Structure

```
Agentic-AI-Construction-Risk-Analytics/
├── .gitignore                    # Consolidated ignore rules
├── README.md                     # ← You are here
├── backend/                      # FastAPI + SQLAlchemy + JWT
│   ├── app/
│   │   ├── main.py               # FastAPI app, CORS, lifespan, router include
│   │   ├── config.py             # pydantic-settings env loader
│   │   ├── database.py           # SQLAlchemy engine + SessionLocal + Base
│   │   ├── security.py           # bcrypt + JWT encode/decode
│   │   ├── dependencies.py       # get_current_user (OAuth2 bearer)
│   │   ├── models/               # 16 SQLAlchemy models
│   │   │   ├── user.py, project.py, milestone.py, kpi.py
│   │   │   ├── risk_summary.py, incident.py, alert.py
│   │   │   ├── recommendation.py, risk_trend.py
│   │   │   ├── ai_site_status.py, ai_module.py, ai_insight.py
│   │   │   └── hazard.py, zone.py, report.py, performance_metric.py
│   │   ├── schemas/              # 16 Pydantic v2 schemas (mirrors models)
│   │   └── routers/              # 10 API routers (30 endpoints)
│   │       ├── auth.py, dashboard.py, projects.py
│   │       ├── milestones.py, alerts.py, recommendations.py
│   │       ├── hazards.py, zones.py, risks.py
│   │       └── aihub.py, reports.py
│   ├── seed.py                   # CSV-driven DB seeder (run once)
│   ├── .env                      # Neon DB URL + JWT secret (gitignored)
│   ├── .env.example              # Template
│   ├── requirements.txt
│   └── README.md                 # Backend deep-dive
├── frontend/                     # React 19 + Vite dashboard
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── App.jsx               # Route table (8 pages)
│   │   ├── main.jsx              # Entry + BrowserRouter
│   │   ├── pages/                # Dashboard, Projects, Safety, AIHub, ...
│   │   └── components/           # Sidebar, Navbar, Cards, Charts, Tables, ...
│   ├── package.json
│   ├── vite.config.js            # Includes /api proxy → :8000
│   └── index.html
└── datasets/                     # CSV inputs for seed.py
    ├── projects.csv              # → projects table
    ├── weather_history.csv       # → risk_trends table
    ├── safety.csv
    ├── budget.csv
    ├── cost_prediction.csv
    ├── delay_prediction.csv
    ├── equipment.csv
    ├── inspection.csv
    ├── resources.csv
    └── schedule.csv
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11 or higher
- Node.js 18+ and npm
- Git

### 1. Clone the repository
```bash
git clone https://github.com/shubham9570/Agentic-AI-Construction-Risk-Analytics.git
cd Agentic-AI-Construction-Risk-Analytics
```

### 2. Backend setup (3 commands)
```bash
cd backend
pip install -r requirements.txt
python seed.py                 # creates tables + loads seed data into Neon
uvicorn app.main:app --reload --port 8000
```

- API: http://localhost:8000
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- Health: http://localhost:8000/health

### 3. Frontend setup (2 commands)
```bash
cd ../frontend
npm install
npm run dev
```

- App: http://localhost:5173
- Vite auto-proxies `/api/*` → `http://localhost:8000`

### 4. Login credentials (pre-seeded)
```
Email:    admin@buildai.com
Password: admin123
```

---

## 🔐 Authentication

The API uses **JWT bearer tokens** (HS256, 60-min expiry).

### Flow
```
1. Register  →  POST /api/auth/register    { email, password, full_name }
2. Login     →  POST /api/auth/login       (form-data: username=<email>&password=<pwd>)
3. Receive   ←  { "access_token": "eyJ...", "token_type": "bearer" }
4. Use token →  Authorization: Bearer <token>   (on all /api/* except auth + system)
```

### Example: Login + fetch KPIs
```bash
# 1. Login
TOKEN=$(curl -s -X POST http://localhost:8000/api/auth/login \
  -d "username=admin@buildai.com&password=admin123" \
  | python -c "import sys,json;print(json.load(sys.stdin)['access_token'])")

# 2. Use token
curl -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/dashboard/kpis
```

---

## 📚 API Reference

**30 endpoints total** — 4 public + 26 protected. Full interactive docs at **`/docs`**.

### System (public)
| Method | Endpoint   | Description                |
|--------|------------|----------------------------|
| GET    | `/`        | API root status            |
| GET    | `/health`  | Database connection status |

### Auth (public + protected)
| Method | Endpoint             | Auth     | Description                |
|--------|----------------------|----------|----------------------------|
| POST   | `/api/auth/register` | public   | Register a new user        |
| POST   | `/api/auth/login`    | public   | Login → returns JWT        |
| GET    | `/api/auth/me`       | Bearer   | Current authenticated user |

### Dashboard (protected) — serves `/`
| Method | Endpoint                              | Returns                                |
|--------|---------------------------------------|----------------------------------------|
| GET    | `/api/dashboard/kpis`                 | 4 KPI cards                            |
| GET    | `/api/dashboard/project-progress`     | 5 phases `{phase, value}`              |
| GET    | `/api/dashboard/risk-gauge`           | `{value, level}`                       |
| GET    | `/api/dashboard/risk-trend?days=7`    | `{current, previous, change, data[]}`  |
| GET    | `/api/dashboard/risk-summary`         | 4 risk counters                        |
| GET    | `/api/dashboard/incidents`            | Latest incidents list                  |
| GET    | `/api/dashboard/ai-site-status`       | `{monitoring, zones, sensor_health}`   |
| GET    | `/api/dashboard/risk-distribution`    | Severity distribution with %           |

### Projects (protected) — serves `/projects`
| Method | Endpoint                       | Returns                  |
|--------|--------------------------------|--------------------------|
| GET    | `/api/projects`                | List of all projects     |
| GET    | `/api/projects/{id}`           | Project detail           |
| GET    | `/api/projects/summary`        | 4 summary cards          |
| GET    | `/api/projects/performance`    | 4 performance metrics    |

### Other resources (protected)
| Endpoint                              | Page / Component              |
|---------------------------------------|-------------------------------|
| `/api/milestones`                     | Dashboard timeline            |
| `/api/alerts`                         | Live AI Alerts                |
| `/api/alerts/notifications`           | Navbar bell dropdown          |
| `/api/recommendations`                | AI Recommendations panel      |
| `/api/hazards`                        | Safety / RiskCenter tables    |
| `/api/zones`                          | RiskCenter zone list          |
| `/api/risks/kpis`                     | RiskCenter KPIs               |
| `/api/risks/summary`                  | RiskCenter summary            |
| `/api/aihub/overview`                 | AIHub top metrics             |
| `/api/aihub/modules`                  | AIHub 6 intelligence modules  |
| `/api/aihub/insights`                 | AIHub latest insights         |
| `/api/reports`                        | Reports history               |
| `/api/reports/summary`                | Reports summary cards         |
| `/api/reports/performance`            | Reports performance bars      |
| `/api/reports/insight`                | AI report insight             |

---

## 🗄️ Database Schema

**16 tables** in the `public` schema. All auto-created on app startup (`Base.metadata.create_all`).

| # | Table                  | Purpose                                   |
|---|------------------------|-------------------------------------------|
| 1 | `users`                | Auth accounts (bcrypt hashed)             |
| 2 | `projects`             | Construction projects (CSV-sourced)       |
| 3 | `milestones`           | 5-phase project timeline                  |
| 4 | `kpis`                 | Top dashboard numbers (single row)        |
| 5 | `risk_summary`         | 4 risk counters (high zones, hazards...)  |
| 6 | `incidents`            | Latest incident feed                      |
| 7 | `alerts`               | Live AI alerts (Critical/Warning/Info)    |
| 8 | `recommendations`      | AI-prioritized safety actions             |
| 9 | `risk_trends`          | 7-day risk history (CSV-sourced)          |
| 10 | `ai_site_status`      | AI monitoring banner (24/7, zones, ...)   |
| 11 | `ai_modules`          | 6 AI intelligence modules                 |
| 12 | `ai_insights`         | AIHub latest insights                     |
| 13 | `hazards`             | Active hazard table (RiskCenter)          |
| 14 | `zones`               | Construction zone risk map                |
| 15 | `reports`             | Generated report history                  |
| 16 | `performance_metrics` | Reports performance bars                  |

> See `backend/app/models/*.py` for complete field definitions.

---

## 🌱 Data Seeding

`backend/seed.py` is an idempotent loader that:

1. **Drops & recreates the entire schema** (`DROP SCHEMA public CASCADE`)
2. **Inserts a default admin user**: `admin@buildai.com` / `admin123`
3. **Loads `projects`** from `datasets/projects.csv` (first 8 rows, mapped to schema)
4. **Loads `risk_trends`** from `datasets/weather_history.csv` (last 7 rows, mapped from `WeatherRisk` column → integer score)
5. **Inserts hardcoded values** matching the frontend JSX exactly:
   - 5 milestones (Planning, Foundation, Structure, Roofing, Finishing)
   - 1 KPI row (72% risk, 96% compliance, 14 hazards, 5 alerts)
   - 4 risk-summary counters
   - 4 incidents, 4 alerts, 4 recommendations
   - 6 AI modules, 3 AI insights
   - 4 hazards, 4 zones, 4 reports, 4 performance metrics

Run anytime to reset:
```bash
cd backend
python seed.py
```

---

## ⚙️ Environment Variables

Edit `backend/.env` (template at `backend/.env.example`):

| Variable                       | Required | Default                                                          | Description                            |
|--------------------------------|----------|------------------------------------------------------------------|----------------------------------------|
| `DATABASE_URL`                 | ✅        | —                                                                | Neon Postgres connection string        |
| `JWT_SECRET`                   | ✅        | —                                                                | HMAC secret for JWT signing            |
| `JWT_ALGORITHM`                | ❌        | `HS256`                                                          | JWT algorithm                          |
| `ACCESS_TOKEN_EXPIRE_MINUTES`  | ❌        | `60`                                                             | Token lifetime in minutes              |
| `CORS_ORIGINS`                 | ❌        | `http://localhost:5173,http://localhost:3000`                     | Comma-separated allowed origins        |

---

## 🌍 CORS

CORS is preconfigured in `app/main.py` via `CORSMiddleware`. Default allowed origins:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Create React App default)

Add your production frontend domain to `CORS_ORIGINS` in `.env`.

---

## 🧪 Testing the API

### Public endpoints
```bash
curl http://localhost:8000/
curl http://localhost:8000/health
```

### Login
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -d "username=admin@buildai.com&password=admin123"
```

### Protected endpoint (use token from login)
```bash
curl -H "Authorization: Bearer <TOKEN>" \
  http://localhost:8000/api/dashboard/kpis
```

### Swagger UI
Visit **http://localhost:8000/docs** for a full interactive playground with "Authorize" button to paste a token.

---

## 📦 Deployment

### Backend options
- **Render** — `pip install -r requirements.txt && python seed.py && uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- **Railway** — Same command, automatic `PORT` env var
- **Fly.io** — Use a `Dockerfile` built from `python:3.11-slim`
- **AWS / GCP / Azure** — Containerize and deploy to App Runner / Cloud Run / Container Apps

### Database
- **Neon** (serverless Postgres) — already configured. Use branch databases for staging.

### Frontend options
- **Vercel** — `npm run build`, output `dist/`. Set `VITE_API_URL` env var to backend URL.
- **Netlify** — Same.
- **Cloudflare Pages** — Same.

> **Production note:** Update `JWT_SECRET` to a strong random value and `CORS_ORIGINS` to include your production frontend domain. Never commit `.env`.

---

## 🖼️ Dashboard Pages

The frontend delivers 8 routed pages:

| Route         | Page              | Data Sources                            |
|---------------|-------------------|------------------------------------------|
| `/`           | Dashboard         | KPIs, charts, alerts, recommendations   |
| `/projects`   | Projects          | Projects list, summary, performance     |
| `/safety`     | Safety Agent      | Hazards, live camera tab                |
| `/aihub`      | AI Hub            | Modules, insights, overview             |
| `/analytics`  | Analytics         | (placeholder)                           |
| `/riskcenter` | Risk Center       | KPIs, distribution, zones, hazards      |
| `/reports`    | Reports           | Summary, performance, history, insight  |
| `/settings`   | Settings          | (placeholder)                           |

> The frontend currently uses **hardcoded JSX values** matching the seeded DB 1:1, so dashboards render correctly even without fetching. The backend endpoints are designed with response shapes that match each component's needs, so a future integration is a drop-in `useEffect(fetch(...))` per component.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 👤 Author

**shubham9570** — [@shubham9570](https://github.com/shubham9570)

Project: [github.com/shubham9570/Agentic-AI-Construction-Risk-Analytics](https://github.com/shubham9570/Agentic-AI-Construction-Risk-Analytics)

---

## ⭐ Show your support

If this project helped you, give it a ⭐ on GitHub!
