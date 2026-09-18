import "./Alerts.css";

import {
  FaHardHat,
  FaCloudRain,
  FaTools,
  FaCheckCircle,
  FaCircle
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { EmptyState, ErrorState, Skeleton } from "../States/States";

const LEVEL_STYLES = {
  CRITICAL: { rowClass: "critical", icon: <FaHardHat /> },
  WARNING: { rowClass: "warning", icon: <FaCloudRain /> },
  INFO: { rowClass: "info", icon: <FaTools /> },
  RESOLVED: { rowClass: "success", icon: <FaCheckCircle /> },
};

function levelStyle(level, index) {
  const key = (level || "").toUpperCase();
  if (LEVEL_STYLES[key]) return LEVEL_STYLES[key];
  const fallbacks = Object.values(LEVEL_STYLES);
  return fallbacks[index % fallbacks.length];
}

function activeCount(alerts) {
  return alerts.filter((a) => (a.status || "").toLowerCase() === "active").length;
}

function Alerts() {
  const { data, loading, error, retry } = useApi(endpoints.alerts);

  if (loading) {
    return (
      <div className="liveAlerts">
        <div className="alertsHeader">
          <div>
            <h2>🚨 Live AI Alerts</h2>
            <p>Real-time alerts detected by the intelligence system</p>
          </div>
        </div>
        <Skeleton lines={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="liveAlerts">
        <div className="alertsHeader">
          <div>
            <h2>🚨 Live AI Alerts</h2>
            <p>Real-time alerts detected by the intelligence system</p>
          </div>
        </div>
        <ErrorState message={error} onRetry={retry} />
      </div>
    );
  }

  const alerts = Array.isArray(data) ? data : [];

  if (alerts.length === 0) {
    return (
      <div className="liveAlerts">
        <div className="alertsHeader">
          <div>
            <h2>🚨 Live AI Alerts</h2>
            <p>Real-time alerts detected by the intelligence system</p>
          </div>
        </div>
        <EmptyState message="No alerts right now." />
      </div>
    );
  }

  return (
    <div className="liveAlerts">

      <div className="alertsHeader">

        <div>
          <h2>
            🚨 Live AI Alerts
          </h2>

          <p>
            Real-time alerts detected by the intelligence system
          </p>
        </div>

        <div className="activeAlerts">
          <FaCircle />
          {activeCount(alerts)} Active
        </div>

      </div>


      <div className="alertsList">

        {alerts.map((alert, index) => {
          const style = levelStyle(alert.level, index);
          return (
            <div className={`alertItem ${style.rowClass}`} key={alert.id ?? index}>

              <div className="alertIcon">
                {style.icon}
              </div>

              <div className="alertContent">

                <div className="alertTitle">
                  <strong>{alert.title}</strong>

                  <span>{(alert.level || "").toUpperCase()}</span>
                </div>

                <p>
                  {alert.description}
                </p>

                <small>
                  {alert.time_ago}
                </small>

              </div>

            </div>
          );
        })}

      </div>


      <div className="alertsFooter">
        AI monitoring continuously scans site conditions
      </div>

    </div>
  );
}

export default Alerts;
