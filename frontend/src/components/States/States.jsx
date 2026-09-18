import "./States.css";

export function Skeleton({ lines = 3, className = "" }) {
  return (
    <div className={`stateBlock skeleton ${className}`} aria-busy="true" aria-label="Loading">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeletonLine" />
      ))}
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="stateBlock errorState" role="alert">
      <div className="errorTitle">⚠️ Couldn&apos;t load data</div>
      <p className="errorMessage">{message || "Something went wrong."}</p>
      {onRetry && (
        <button className="retryButton" onClick={onRetry} type="button">
          Retry
        </button>
      )}
    </div>
  );
}

export function EmptyState({ message }) {
  return (
    <div className="stateBlock emptyState">
      <p>{message || "No data yet."}</p>
    </div>
  );
}
