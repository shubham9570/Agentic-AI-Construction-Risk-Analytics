import { useEffect, useState } from "react";

import { client } from "../api/client";

/**
 * Fetch one endpoint with loading/error states + unmount safety.
 * Returns { data, loading, error, retry }.
 */
export function useApi(path, options = {}) {
  const { disabled = false, initialData = null } = options;
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(() => !disabled);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  function retry() {
    setLoading(true);
    setError(null);
    setAttempt((n) => n + 1);
  }

  useEffect(() => {
    if (disabled) {
      return undefined;
    }
    let cancelled = false;
    client
      .get(path)
      .then((res) => {
        if (!cancelled) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [path, disabled, attempt]);

  return { data, loading, error, retry };
}

/**
 * Fetch several endpoints in parallel. Returns { results, loading, error, retry }.
 * `results` is an array aligned with `paths` (failed entries are null).
 */
export function useApiAll(paths) {
  const key = paths.join("|");
  const [results, setResults] = useState(() => paths.map(() => null));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  function retry() {
    setLoading(true);
    setError(null);
    setAttempt((n) => n + 1);
  }

  useEffect(() => {
    let cancelled = false;
    Promise.all(paths.map((p) => client.get(p).catch(() => null))).then(
      (res) => {
        if (cancelled) return;
        setResults(res);
        setLoading(false);
        if (res.every((r) => r === null)) {
          setError("Could not load data. Is the backend running on :8000?");
        }
      }
    );
    return () => {
      cancelled = true;
    };
    // `key` is the serialized `paths`; depending on `paths` directly would
    // refetch on every render since arrays are referentially unstable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, attempt]);

  return { results, loading, error, retry };
}
