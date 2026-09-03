import "./RiskMonitoring.css";

import {
  FaExclamationTriangle,
  FaBell,
  FaHardHat,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

function RiskMonitoring() {
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

          <div className="riskRow">

            <div className="riskLabel">
              <span className="riskIcon high">
                <FaExclamationTriangle />
              </span>

              <div>
                <strong>High Risk Zones</strong>
                <small>Immediate attention</small>
              </div>
            </div>

            <div className="riskValue highText">
              04
            </div>

          </div>


          <div className="riskRow">

            <div className="riskLabel">
              <span className="riskIcon warning">
                <FaBell />
              </span>

              <div>
                <strong>Active Hazards</strong>
                <small>Detected today</small>
              </div>
            </div>

            <div className="riskValue warningText">
              14
            </div>

          </div>


          <div className="riskRow">

            <div className="riskLabel">
              <span className="riskIcon violation">
                <FaHardHat />
              </span>

              <div>
                <strong>Safety Violations</strong>
                <small>PPE & site violations</small>
              </div>
            </div>

            <div className="riskValue violationText">
              08
            </div>

          </div>


          <div className="riskRow">

            <div className="riskLabel">
              <span className="riskIcon safe">
                <FaShieldAlt />
              </span>

              <div>
                <strong>Safe Zones</strong>
                <small>Operating normally</small>
              </div>
            </div>

            <div className="riskValue safeText">
              18
            </div>

          </div>

        </div>


        {/* Latest Incidents */}
        <div className="incidentPanel">

          <div className="panelTitle">
            <h3>Latest Incidents</h3>

            <span>View All</span>
          </div>


          <div className="incident">

            <div className="incidentIcon danger">
              <FaExclamationTriangle />
            </div>

            <div className="incidentInfo">
              <strong>PPE Violation</strong>
              <p>3 workers without helmets — Site A</p>
            </div>

            <span className="incidentTime">
              5 min
            </span>

          </div>


          <div className="incident">

            <div className="incidentIcon warning">
              <FaBell />
            </div>

            <div className="incidentInfo">
              <strong>Weather Warning</strong>
              <p>Heavy rainfall expected — Zone B</p>
            </div>

            <span className="incidentTime">
              18 min
            </span>

          </div>


          <div className="incident">

            <div className="incidentIcon equipment">
              <FaHardHat />
            </div>

            <div className="incidentInfo">
              <strong>Equipment Alert</strong>
              <p>Excavator EX-04 requires inspection</p>
            </div>

            <span className="incidentTime">
              32 min
            </span>

          </div>


          <div className="incident">

            <div className="incidentIcon safe">
              <FaCheckCircle />
            </div>

            <div className="incidentInfo">
              <strong>Zone C Cleared</strong>
              <p>Safety inspection completed successfully</p>
            </div>

            <span className="incidentTime">
              1 hr
            </span>

          </div>

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
            <strong>24/7</strong>
            <span>Monitoring</span>
          </div>

          <div>
            <strong>32</strong>
            <span>Zones</span>
          </div>

          <div>
            <strong>98%</strong>
            <span>Sensor Health</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default RiskMonitoring;