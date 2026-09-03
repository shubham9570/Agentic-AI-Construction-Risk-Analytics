import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./RiskCenter.css";

import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaBell,
  FaFire,
  FaHardHat,
  FaBolt,
  FaTint,
  FaTools,
  FaRobot,
  FaArrowUp,
  FaCheckCircle
} from "react-icons/fa";

function RiskCenter() {
  return (
    <>
      <Sidebar />

      <div className="riskCenterPage">

        <Navbar />

        <div className="riskCenterContent">

          {/* =========================
              HEADER
          ========================= */}

          <div className="riskCenterHeader">

            <div>
              <h1>
                <FaExclamationTriangle />
                Risk Center
              </h1>

              <p>
                AI-powered site risk monitoring, hazard detection
                and proactive safety management.
              </p>
            </div>

            <div className="riskMonitoringStatus">
              <span></span>
              AI Monitoring Active
            </div>

          </div>


          {/* =========================
              RISK KPI
          ========================= */}

          <div className="riskKpiGrid">

            <div className="riskKpi overallRisk">

              <div className="riskKpiIcon">
                <FaExclamationTriangle />
              </div>

              <div>
                <span>Overall Risk Score</span>
                <strong>72%</strong>
                <small>
                  <FaArrowUp /> 4% from last week
                </small>
              </div>

            </div>


            <div className="riskKpi safetyCompliance">

              <div className="riskKpiIcon">
                <FaShieldAlt />
              </div>

              <div>
                <span>Safety Compliance</span>
                <strong>96%</strong>
                <small>Excellent compliance</small>
              </div>

            </div>


            <div className="riskKpi activeHazards">

              <div className="riskKpiIcon">
                <FaBell />
              </div>

              <div>
                <span>Active Hazards</span>
                <strong>14</strong>
                <small>Detected today</small>
              </div>

            </div>


            <div className="riskKpi criticalHazards">

              <div className="riskKpiIcon">
                <FaFire />
              </div>

              <div>
                <span>Critical Hazards</span>
                <strong>3</strong>
                <small>Immediate attention</small>
              </div>

            </div>

          </div>


          {/* =========================
              RISK OVERVIEW
          ========================= */}

          <div className="riskOverview">


            {/* Risk Distribution */}

            <div className="riskPanel">

              <div className="panelHeader">

                <div>
                  <h2>Risk Distribution</h2>

                  <p>
                    Current hazards by severity
                  </p>
                </div>

              </div>


              <div className="riskDistribution">

                <div className="riskDistributionItem">

                  <div className="distributionLabel">
                    <span className="distributionDot critical"></span>
                    <span>Critical</span>
                  </div>

                  <strong>3</strong>

                </div>


                <div className="distributionBar">

                  <div
                    className="distributionFill criticalFill"
                    style={{ width: "21%" }}
                  ></div>

                </div>


                <div className="riskDistributionItem">

                  <div className="distributionLabel">
                    <span className="distributionDot high"></span>
                    <span>High</span>
                  </div>

                  <strong>5</strong>

                </div>


                <div className="distributionBar">

                  <div
                    className="distributionFill highFill"
                    style={{ width: "36%" }}
                  ></div>

                </div>


                <div className="riskDistributionItem">

                  <div className="distributionLabel">
                    <span className="distributionDot medium"></span>
                    <span>Medium</span>
                  </div>

                  <strong>6</strong>

                </div>


                <div className="distributionBar">

                  <div
                    className="distributionFill mediumFill"
                    style={{ width: "43%" }}
                  ></div>

                </div>

              </div>

            </div>


            {/* Zone Risk Status */}

            <div className="riskPanel">

              <div className="panelHeader">

                <div>
                  <h2>Current Risk Status</h2>

                  <p>
                    Risk level across active site zones
                  </p>
                </div>

              </div>


              <div className="zoneList">

                <div className="zoneItem">

                  <div>
                    <strong>Zone A</strong>
                    <span>Structural Area</span>
                  </div>

                  <span className="zoneRisk lowRisk">
                    Low
                  </span>

                </div>


                <div className="zoneItem">

                  <div>
                    <strong>Zone B</strong>
                    <span>Material Storage</span>
                  </div>

                  <span className="zoneRisk highRisk">
                    High
                  </span>

                </div>


                <div className="zoneItem">

                  <div>
                    <strong>Zone C</strong>
                    <span>Equipment Area</span>
                  </div>

                  <span className="zoneRisk mediumRisk">
                    Medium
                  </span>

                </div>


                <div className="zoneItem">

                  <div>
                    <strong>Basement</strong>
                    <span>Electrical Area</span>
                  </div>

                  <span className="zoneRisk highRisk">
                    High
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              ACTIVE HAZARDS
          ========================= */}

          <section className="hazardsPanel">

            <div className="panelHeader">

              <div>
                <h2>
                  <FaBell />
                  Active Hazard Detection
                </h2>

                <p>
                  Hazards identified by AI-powered site monitoring
                </p>
              </div>

              <span className="hazardCount">
                14 Active
              </span>

            </div>


            <div className="hazardTable">

              <div className="hazardTableHeader">
                <span>Hazard</span>
                <span>Location</span>
                <span>Detected</span>
                <span>Severity</span>
                <span>Status</span>
              </div>


              {/* Hazard 1 */}

              <div className="hazardRow">

                <div className="hazardName">
                  <div className="hazardIcon red">
                    <FaHardHat />
                  </div>

                  <div>
                    <strong>PPE Violation</strong>
                    <span>Workers without helmets</span>
                  </div>
                </div>

                <span>Zone B</span>

                <span>5 min ago</span>

                <span className="severity criticalSeverity">
                  Critical
                </span>

                <span className="hazardStatus activeStatus">
                  Active
                </span>

              </div>


              {/* Hazard 2 */}

              <div className="hazardRow">

                <div className="hazardName">
                  <div className="hazardIcon orange">
                    <FaTools />
                  </div>

                  <div>
                    <strong>Unsafe Equipment</strong>
                    <span>Equipment inspection required</span>
                  </div>
                </div>

                <span>Zone A</span>

                <span>18 min ago</span>

                <span className="severity highSeverity">
                  High
                </span>

                <span className="hazardStatus activeStatus">
                  Active
                </span>

              </div>


              {/* Hazard 3 */}

              <div className="hazardRow">

                <div className="hazardName">
                  <div className="hazardIcon blue">
                    <FaTint />
                  </div>

                  <div>
                    <strong>Wet Surface</strong>
                    <span>Slip hazard detected</span>
                  </div>
                </div>

                <span>Zone C</span>

                <span>32 min ago</span>

                <span className="severity mediumSeverity">
                  Medium
                </span>

                <span className="hazardStatus activeStatus">
                  Active
                </span>

              </div>


              {/* Hazard 4 */}

              <div className="hazardRow">

                <div className="hazardName">
                  <div className="hazardIcon red">
                    <FaBolt />
                  </div>

                  <div>
                    <strong>Electrical Hazard</strong>
                    <span>Unsafe wiring detected</span>
                  </div>
                </div>

                <span>Basement</span>

                <span>45 min ago</span>

                <span className="severity highSeverity">
                  High
                </span>

                <span className="hazardStatus activeStatus">
                  Active
                </span>

              </div>

            </div>

          </section>


          {/* =========================
              AI RECOMMENDATIONS
          ========================= */}

          <section className="riskAiPanel">

            <div className="riskAiHeader">

              <div className="riskAiTitle">

                <div className="riskRobotIcon">
                  <FaRobot />
                </div>

                <div>
                  <h2>
                    AI Risk Recommendations
                  </h2>

                  <p>
                    Recommended actions based on detected site conditions
                  </p>
                </div>

              </div>

              <span>
                AI Generated
              </span>

            </div>


            <div className="riskRecommendations">

              <div className="riskRecommendation">

                <FaHardHat />

                <div>
                  <strong>
                    Increase PPE inspections in Zone B
                  </strong>

                  <p>
                    Multiple helmet violations detected by
                    computer vision monitoring.
                  </p>
                </div>

                <button>
                  Review
                </button>

              </div>


              <div className="riskRecommendation">

                <FaTools />

                <div>
                  <strong>
                    Inspect equipment in Zone A
                  </strong>

                  <p>
                    AI detected abnormal equipment activity
                    requiring preventive inspection.
                  </p>
                </div>

                <button>
                  Review
                </button>

              </div>


              <div className="riskRecommendation">

                <FaCheckCircle />

                <div>
                  <strong>
                    Maintain current safety controls
                  </strong>

                  <p>
                    Overall safety compliance remains above
                    the target threshold.
                  </p>
                </div>

                <button>
                  Review
                </button>

              </div>

            </div>

          </section>


          {/* =========================
              FOOTER STATUS
          ========================= */}

          <div className="riskCenterFooter">

            <span>
              ● AI monitoring continuously active
            </span>

            <span>
              Last system update: 2 minutes ago
            </span>

          </div>

        </div>

      </div>
    </>
  );
}

export default RiskCenter;