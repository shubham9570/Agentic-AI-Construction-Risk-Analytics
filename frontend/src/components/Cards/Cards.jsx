import "./Cards.css";

import {
  FaExclamationTriangle,
  FaHardHat,
  FaBell,
  FaRobot
} from "react-icons/fa";

function Cards() {
  return (
    <div className="cards">

      {/* Overall Risk */}
      <div className="card risk">

        <div className="card-top">
          <div className="iconBox riskIcon">
            <FaExclamationTriangle />
          </div>

          <span className="card-status risk-status">
            HIGH
          </span>
        </div>

        <h4>Overall Risk Score</h4>

        <h2>72%</h2>

        <p>High Risk</p>

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
            EXCELLENT
          </span>
        </div>

        <h4>Safety Compliance</h4>

        <h2>96%</h2>

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
            14 ACTIVE
          </span>
        </div>

        <h4>Active Hazards</h4>

        <h2>14</h2>

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

        <h2>05</h2>

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