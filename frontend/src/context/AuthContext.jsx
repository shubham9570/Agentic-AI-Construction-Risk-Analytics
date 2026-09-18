import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  client,
  clearSession,
  endpoints,
  getStoredUser,
  getToken,
  setSession,
} from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUser());
  const [token, setToken] = useState(() => getToken());
  const [loading, setLoading] = useState(() => Boolean(getToken()));
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    if (!getToken()) {
      return undefined;
    }
    client
      .get(endpoints.me)
      .then((me) => {
        if (!cancelled) {
          setUser(me);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message);
          setUser(null);
          setToken(null);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (email, password) => {
    setError(null);
    const data = await client.login(email, password);
    const nextToken = data.access_token;
    // persist token BEFORE the /me call so it carries Authorization
    setSession(nextToken, null);
    setToken(nextToken);
    const me = await client.get(endpoints.me).catch(() => null);
    setSession(nextToken, me);
    setUser(me);
    return me;
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
    setToken(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      loading,
      error,
      login,
      logout,
    }),
    [user, token, loading, error, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}
