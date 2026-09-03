import "./Alerts.css";

import {
  FaHardHat,
  FaCloudRain,
  FaTools,
  FaCheckCircle,
  FaCircle
} from "react-icons/fa";

function Alerts() {
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
          4 Active
        </div>

      </div>


      <div className="alertsList">

        {/* PPE Alert */}

        <div className="alertItem critical">

          <div className="alertIcon">
            <FaHardHat />
          </div>

          <div className="alertContent">

            <div className="alertTitle">
              <strong>PPE Violation</strong>

              <span>CRITICAL</span>
            </div>

            <p>
              3 workers detected without helmets — Site A
            </p>

            <small>
              5 minutes ago
            </small>

          </div>

        </div>


        {/* Weather Alert */}

        <div className="alertItem warning">

          <div className="alertIcon">
            <FaCloudRain />
          </div>

          <div className="alertContent">

            <div className="alertTitle">
              <strong>Weather Warning</strong>

              <span>WARNING</span>
            </div>

            <p>
              Heavy rainfall expected near Zone B
            </p>

            <small>
              18 minutes ago
            </small>

          </div>

        </div>


        {/* Equipment Alert */}

        <div className="alertItem info">

          <div className="alertIcon">
            <FaTools />
          </div>

          <div className="alertContent">

            <div className="alertTitle">
              <strong>Equipment Alert</strong>

              <span>INFO</span>
            </div>

            <p>
              Excavator EX-04 requires maintenance inspection
            </p>

            <small>
              32 minutes ago
            </small>

          </div>

        </div>


        {/* Completed Alert */}

        <div className="alertItem success">

          <div className="alertIcon">
            <FaCheckCircle />
          </div>

          <div className="alertContent">

            <div className="alertTitle">
              <strong>Safety Check Completed</strong>

              <span>RESOLVED</span>
            </div>

            <p>
              Zone C safety inspection completed successfully
            </p>

            <small>
              1 hour ago
            </small>

          </div>

        </div>

      </div>


      <div className="alertsFooter">
        AI monitoring continuously scans site conditions
      </div>

    </div>
  );
}

export default Alerts;