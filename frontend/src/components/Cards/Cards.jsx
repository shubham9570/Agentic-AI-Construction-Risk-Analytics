import "./Cards.css";

import {
  FaExclamationTriangle,
  FaHardHat,
  FaBell,
  FaRobot
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { ErrorState, Skeleton } from "../States/States";

function riskStatusLabel(score) {
  if (score >= 70) return "HIGH";
  if (score >= 40) return "MEDIUM";
  return "LOW";
}

function riskTextLabel(score) {
  if (score >= 70) return "High Risk";
  if (score >= 40) return "Medium Risk";
  return "Low Risk";
}

function complianceLabel(value) {
  if (value >= 90) return "EXCELLENT";
  if (value >= 75) return "GOOD";
  return "NEEDS WORK";
}

function Cards() {
  const { data, loading, error, retry } = useApi(endpoints.kpis);

  if (loading) {
    return (
      <div className="cards">
        <Skeleton lines={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="cards">
        <ErrorState message={error} onRetry={retry} />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const riskScore = data.overall_risk_score ?? 0;
  const compliance = data.safety_compliance ?? 0;
  const hazards = data.active_hazards ?? 0;
  const alerts = data.live_alerts ?? 0;

  return (
    <div className="cards">

      {/* Overall Risk */}
      <div className="card risk">

        <div className="card-top">
          <div className="iconBox riskIcon">
            <FaExclamationTriangle />
          </div>

          <span className="card-status risk-status">
            {riskStatusLabel(riskScore)}
          </span>
        </div>

        <h4>Overall Risk Score</h4>

        <h2>{riskScore}%</h2>

        <p>{data.risk_label || riskTextLabel(riskScore)}</p>

        <span className="card-info">
          Updated 2 mins ago
        </span>

        <div className="card-line risk-line"></div>

      </div>


      {/* Safety Compliance */}
      <div className="card safety">

        <div className="card-top">
          <div className="iconBox safetyIcon">
            <FaHardHat />
          </div>

          <span className="card-status safety-status">
            {complianceLabel(compliance)}
          </span>
        </div>

        <h4>Safety Compliance</h4>

        <h2>{compliance}%</h2>

        <p>Excellent</p>

        <span className="card-info">
          PPE Detection Active
        </span>

        <div className="card-line safety-line"></div>

      </div>


      {/* Active Hazards */}
      <div className="card hazard">

        <div className="card-top">
          <div className="iconBox hazardIcon">
            <FaBell />
          </div>

          <span className="card-status hazard-status">
            {hazards} ACTIVE
          </span>
        </div>

        <h4>Active Hazards</h4>

        <h2>{hazards}</h2>

        <p>Detected Today</p>

        <span className="card-info">
          Monitoring Site
        </span>

        <div className="card-line hazard-line"></div>

      </div>


      {/* Live Alerts */}
      <div className="card alerts">

        <div className="card-top">
          <div className="iconBox alertIcon">
            <FaRobot />
          </div>

          <span className="card-status alert-status">
            LIVE
          </span>
        </div>

        <h4>Live Alerts</h4>

        <h2>{String(alerts).padStart(2, "0")}</h2>

        <p>AI Monitoring</p>

        <span className="card-info">
          Real-Time Alerts
        </span>

        <div className="card-line alert-line"></div>

      </div>

    </div>
  );
}

export default Cards;
