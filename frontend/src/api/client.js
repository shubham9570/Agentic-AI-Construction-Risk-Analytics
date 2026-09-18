const API_BASE = import.meta.env.VITE_API_URL || "";

const TOKEN_KEY = "buildai_token";
const USER_KEY = "buildai_user";

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setSession(token, user) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  } catch {
    /* storage unavailable (private mode) — session stays in memory only */
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.location.pathname !== "/login") {
    window.location.assign("/login");
  }
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

async function request(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  const headers = {
    ...(options.headers || {}),
  };
  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
      signal: controller.signal,
    });
  } catch (error) {
    clearTimeout(timeout);
    if (error?.name === "AbortError") {
      throw new Error("Request timed out. Is the backend running on :8000?", {
        cause: error,
      });
    }
    throw new Error("Cannot reach the API. Is the backend running on :8000?", {
      cause: error,
    });
  }
  clearTimeout(timeout);

  if (response.status === 401) {
    clearSession();
    throw new Error("Session expired. Please log in again.");
  }

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const detail = data?.detail || `Request failed (${response.status})`;
    throw new Error(typeof detail === "string" ? detail : JSON.stringify(detail));
  }
  return data;
}

export const client = {
  get: (path) => request(path, { method: "GET" }),

  postJson: (path, body) =>
    request(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),

  postForm: (path, fields) => {
    const form = new URLSearchParams();
    Object.entries(fields).forEach(([key, value]) => form.append(key, value));
    return request(path, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
  },

  login: (email, password) =>
    request("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ username: email, password }).toString(),
    }),

  register: (email, password, fullName) =>
    request("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, full_name: fullName }),
    }),
};

export const endpoints = {
  me: "/api/auth/me",
  kpis: "/api/dashboard/kpis",
  projectProgress: "/api/dashboard/project-progress",
  riskGauge: "/api/dashboard/risk-gauge",
  riskTrend: (days = 7) => `/api/dashboard/risk-trend?days=${days}`,
  riskSummary: "/api/dashboard/risk-summary",
  incidents: "/api/dashboard/incidents",
  aiSiteStatus: "/api/dashboard/ai-site-status",
  riskDistribution: "/api/dashboard/risk-distribution",
  projects: "/api/projects",
  project: (id) => `/api/projects/${id}`,
  projectsSummary: "/api/projects/summary",
  projectsPerformance: "/api/projects/performance",
  milestones: "/api/milestones",
  alerts: "/api/alerts",
  notifications: "/api/alerts/notifications",
  recommendations: "/api/recommendations",
  hazards: "/api/hazards",
  zones: "/api/zones",
  riskKpis: "/api/risks/kpis",
  riskSummaryAlt: "/api/risks/summary",
  aihubOverview: "/api/aihub/overview",
  aihubModules: "/api/aihub/modules",
  aihubInsights: "/api/aihub/insights",
  reports: "/api/reports",
  reportsSummary: "/api/reports/summary",
  reportsPerformance: "/api/reports/performance",
  reportsInsight: "/api/reports/insight",
  mlModels: "/api/ml/models",
  ppeHealth: "/api/ppe/health",
};
