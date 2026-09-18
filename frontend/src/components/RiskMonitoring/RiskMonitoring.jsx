import "./RiskMonitoring.css";

import {
  FaExclamationTriangle,
  FaBell,
  FaHardHat,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApiAll } from "../../api/useApi";
import { ErrorState, Skeleton } from "../States/States";

const SUMMARY_PRESETS = [
  { icon: <FaExclamationTriangle />, iconClass: "high", valueClass: "highText" },
  { icon: <FaBell />, iconClass: "warning", valueClass: "warningText" },
  { icon: <FaHardHat />, iconClass: "violation", valueClass: "violationText" },
  { icon: <FaShieldAlt />, iconClass: "safe", valueClass: "safeText" },
];

const SUMMARY_SUBTITLES = {
  "High Risk Zones": "Immediate attention",
  "Active Hazards": "Detected today",
  "Safety Violations": "PPE & site violations",
  "Safe Zones": "Operating normally",
};

const INCIDENT_ICONS = {
  triangle: { icon: <FaExclamationTriangle />, iconClass: "danger" },
  bell: { icon: <FaBell />, iconClass: "warning" },
  hardhat: { icon: <FaHardHat />, iconClass: "equipment" },
  check: { icon: <FaCheckCircle />, iconClass: "safe" },
};

function incidentVisual(incident, index) {
  const preset = INCIDENT_ICONS[incident.icon_key];
  if (preset) return preset;
  const fallbacks = [
    { icon: <FaExclamationTriangle />, iconClass: "danger" },
    { icon: <FaBell />, iconClass: "warning" },
    { icon: <FaHardHat />, iconClass: "equipment" },
    { icon: <FaCheckCircle />, iconClass: "safe" },
  ];
  return fallbacks[index % fallbacks.length];
}

function RiskMonitoring() {
  const { results, loading, error, retry } = useApiAll([
    endpoints.riskSummary,
    endpoints.incidents,
    endpoints.aiSiteStatus,
  ]);

  if (loading) {
    return (
      <section className="riskMonitoring">
        <div className="riskHeader">
          <div>
            <h2>
              <FaExclamationTriangle />
              Site Risk Monitoring
            </h2>
            <p>Real-time overview of construction site safety and hazards</p>
          </div>
        </div>
        <Skeleton lines={5} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="riskMonitoring">
        <div className="riskHeader">
          <div>
            <h2>
              <FaExclamationTriangle />
              Site Risk Monitoring
            </h2>
            <p>Real-time overview of construction site safety and hazards</p>
          </div>
        </div>
        <ErrorState message={error} onRetry={retry} />
      </section>
    );
  }

  const [summary, incidents, siteStatus] = results;
  const summaryRows = Array.isArray(summary) ? summary : [];
  const incidentRows = Array.isArray(incidents) ? incidents : [];

  return (
    <section className="riskMonitoring">

      {/* Header */}
      <div className="riskHeader">

        <div>
          <h2>
            <FaExclamationTriangle />
            Site Risk Monitoring
          </h2>

          <p>
            Real-time overview of construction site safety and hazards
          </p>
        </div>

        <div className="monitorStatus">
          <span className="statusDot"></span>
          AI Monitoring Active
        </div>

      </div>


      {/* Main Monitoring Area */}
      <div className="riskMonitoringGrid">

        {/* Risk Summary */}
        <div className="riskSummary">

          <h3>Risk Summary</h3>

          {summaryRows.map((row, index) => {
            const preset = SUMMARY_PRESETS[index % SUMMARY_PRESETS.length];
            return (
              <div className="riskRow" key={row.id ?? index}>

                <div className="riskLabel">
                  <span className={`riskIcon ${preset.iconClass}`}>
                    {preset.icon}
                  </span>

                  <div>
                    <strong>{row.label}</strong>
                    <small>{SUMMARY_SUBTITLES[row.label] || row.severity}</small>
                  </div>
                </div>

                <div className={`riskValue ${preset.valueClass}`}>
                  {String(row.count).padStart(2, "0")}
                </div>

              </div>
            );
          })}

        </div>


        {/* Latest Incidents */}
        <div className="incidentPanel">

          <div className="panelTitle">
            <h3>Latest Incidents</h3>

            <span>View All</span>
          </div>


          {incidentRows.map((incident, index) => {
            const visual = incidentVisual(incident, index);
            return (
              <div className="incident" key={incident.id ?? index}>

                <div className={`incidentIcon ${visual.iconClass}`}>
                  {visual.icon}
                </div>

                <div className="incidentInfo">
                  <strong>{incident.type}</strong>
                  <p>{incident.description}{incident.location ? ` — ${incident.location}` : ""}</p>
                </div>

                <span className="incidentTime">
                  {incident.time_ago}
                </span>

              </div>
            );
          })}

        </div>

      </div>


      {/* Bottom Status */}
      <div className="siteStatus">

        <div className="siteStatusIcon">
          <FaCheckCircle />
        </div>

        <div className="siteStatusText">

          <strong>AI Site Status</strong>

          <p>
            All connected monitoring systems are operating normally.
            AI hazard detection is active across the construction site.
          </p>

        </div>

        <div className="statusMetrics">

          <div>
            <strong>{siteStatus?.monitoring || "24/7"}</strong>
            <span>Monitoring</span>
          </div>

          <div>
            <strong>{siteStatus?.zones ?? 32}</strong>
            <span>Zones</span>
          </div>

          <div>
            <strong>{siteStatus?.sensor_health != null ? `${siteStatus.sensor_health}%` : "98%"}</strong>
            <span>Sensor Health</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default RiskMonitoring;
