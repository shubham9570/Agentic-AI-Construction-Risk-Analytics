import "./SiteMonitoring.css";

import {
  FaExclamationTriangle,
  FaHardHat,
  FaBell,
  FaShieldAlt,
  FaMapMarkedAlt
} from "react-icons/fa";

function SiteMonitoring() {
  return (

    <div className="siteMonitoring">

      <h2>🚨 Site Risk Monitoring</h2>

      <div className="monitorGrid">

        <div className="monitorCard red">

          <FaExclamationTriangle className="monitorIcon"/>

          <h3>High Risk Zones</h3>

          <h1>04</h1>

          <p>Immediate Attention</p>

        </div>

        <div className="monitorCard orange">

          <FaBell className="monitorIcon"/>

          <h3>Active Hazards</h3>

          <h1>14</h1>

          <p>Detected Today</p>

        </div>

        <div className="monitorCard yellow">

          <FaHardHat className="monitorIcon"/>

          <h3>Safety Violations</h3>

          <h1>08</h1>

          <p>PPE Missing</p>

        </div>

        <div className="monitorCard green">

          <FaShieldAlt className="monitorIcon"/>

          <h3>Safe Zones</h3>

          <h1>18</h1>

          <p>Operating Normally</p>

        </div>

        <div className="monitorCard blue">

          <FaMapMarkedAlt className="monitorIcon"/>

          <h3>AI Monitoring</h3>

          <h1>24/7</h1>

          <p>Real-Time Tracking</p>

        </div>

      </div>

    </div>

  );
}

export default SiteMonitoring;