import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import "./Login.css";

function Login() {
  const { isAuthenticated, loading, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("admin@buildai.com");
  const [password, setPassword] = useState("admin123");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  if (!loading && isAuthenticated) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login(email.trim(), password);
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="loginLogo">🏗️ BuildAI</div>
        <h1>Construction Intelligence Platform</h1>
        <p className="loginSubtitle">Sign in to access the command center</p>

        <form onSubmit={handleSubmit} className="loginForm">
          <label className="loginLabel" htmlFor="login-email">
            Email
            <input
              id="login-email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@buildai.com"
            />
          </label>

          <label className="loginLabel" htmlFor="login-password">
            Password
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>

          {error && (
            <div className="loginError" role="alert">
              {error}
            </div>
          )}

          <button className="loginButton" type="submit" disabled={submitting}>
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="loginHint">Demo credentials are pre-filled for testing.</p>
      </div>
    </div>
  );
}

export default Login;
