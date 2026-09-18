import "./RiskGauge.css";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { ErrorState, Skeleton } from "../States/States";

function RiskGauge() {
  const { data, loading, error, retry } = useApi(endpoints.riskGauge);

  if (loading) {
    return (
      <div className="riskGauge">
        <h2>⚠ AI Risk Gauge</h2>
        <Skeleton lines={3} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="riskGauge">
        <h2>⚠ AI Risk Gauge</h2>
        <ErrorState message={error} onRetry={retry} />
      </div>
    );
  }

  const value = data?.value ?? 0;
  const level = data?.level || "Unknown";

  return (
    <div className="riskGauge">

      <h2>⚠ AI Risk Gauge</h2>

      <div className="circle">

        <div className="innerCircle">

          <h1>{value}%</h1>

          <p>{level}</p>

        </div>

      </div>

    </div>
  );
}

export default RiskGauge;
