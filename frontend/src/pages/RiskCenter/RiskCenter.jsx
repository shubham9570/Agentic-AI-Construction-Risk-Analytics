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

import { endpoints } from "../../api/client";
import { useApiAll } from "../../api/useApi";
import { ErrorState, Skeleton } from "../../components/States/States";

const DISTRIBUTION_STYLES = [
  { dot: "critical", fill: "criticalFill" },
  { dot: "high", fill: "highFill" },
  { dot: "medium", fill: "mediumFill" },
  { dot: "low", fill: "lowFill" },
];

const ZONE_RISK_CLASSES = {
  low: "lowRisk",
  medium: "mediumRisk",
  high: "highRisk",
  critical: "highRisk",
};

const HAZARD_ICONS = {
  hardhat: { icon: <FaHardHat />, color: "red" },
  tools: { icon: <FaTools />, color: "orange" },
  tint: { icon: <FaTint />, color: "blue" },
  bolt: { icon: <FaBolt />, color: "red" },
  bell: { icon: <FaBell />, color: "orange" },
};

const HAZARD_FALLBACK = [
  { icon: <FaHardHat />, color: "red" },
  { icon: <FaTools />, color: "orange" },
  { icon: <FaTint />, color: "blue" },
  { icon: <FaBolt />, color: "red" },
];

function severityClass(severity) {
  const key = (severity || "").toLowerCase();
  if (key === "critical") return "criticalSeverity";
  if (key === "high") return "highSeverity";
  return "mediumSeverity";
}

function severityText(severity) {
  if (!severity) return "Medium";
  return severity.charAt(0).toUpperCase() + severity.slice(1);
}

function zoneRiskClass(riskLevel) {
  const key = (riskLevel || "").toLowerCase();
  return ZONE_RISK_CLASSES[key] || "mediumRisk";
}

function zoneRiskText(riskLevel) {
  if (!riskLevel) return "Medium";
  return riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1);
}

function hazardVisual(hazard, index) {
  if (hazard.icon_key && HAZARD_ICONS[hazard.icon_key]) {
    return HAZARD_ICONS[hazard.icon_key];
  }
  return HAZARD_FALLBACK[index % HAZARD_FALLBACK.length];
}

const RECOMMENDATION_ICONS = [<FaHardHat />, <FaTools />, <FaCheckCircle />];

function RiskCenter() {
  const { results, loading, error, retry } = useApiAll([
    endpoints.riskKpis,
    endpoints.riskDistribution,
    endpoints.zones,
    endpoints.hazards,
    endpoints.recommendations,
  ]);

  const [kpis, distribution, zones, hazards, recommendations] = results;

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


          {loading && <Skeleton lines={6} />}

          {error && <ErrorState message={error} onRetry={retry} />}

          {!loading && !error && (
            <>
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
                    <strong>{kpis?.overall_risk_score ?? 0}%</strong>
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
                    <strong>{kpis?.safety_compliance ?? 0}%</strong>
                    <small>Excellent compliance</small>
                  </div>

                </div>


                <div className="riskKpi activeHazards">

                  <div className="riskKpiIcon">
                    <FaBell />
                  </div>

                  <div>
                    <span>Active Hazards</span>
                    <strong>{kpis?.active_hazards ?? 0}</strong>
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

                    {(distribution?.distribution || []).map((item, index) => {
                      const style = DISTRIBUTION_STYLES[index % DISTRIBUTION_STYLES.length];
                      return (
                        <div key={index}>
                          <div className="riskDistributionItem">

                            <div className="distributionLabel">
                              <span className={`distributionDot ${style.dot}`}></span>
                              <span>{item.label}</span>
                            </div>

                            <strong>{item.count}</strong>

                          </div>


                          <div className="distributionBar">

                            <div
                              className={`distributionFill ${style.fill}`}
                              style={{ width: `${item.percent}%` }}
                            ></div>

                          </div>
                        </div>
                      );
                    })}

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

                    {(Array.isArray(zones) ? zones : []).map((zone, index) => (
                      <div className="zoneItem" key={zone.id ?? index}>

                        <div>
                          <strong>{zone.name}</strong>
                          <span>{zone.area}</span>
                        </div>

                        <span className={`zoneRisk ${zoneRiskClass(zone.risk_level)}`}>
                          {zoneRiskText(zone.risk_level)}
                        </span>

                      </div>
                    ))}

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
                    {kpis?.active_hazards ?? 0} Active
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


                  {(Array.isArray(hazards) ? hazards : []).map((hazard, index) => {
                    const visual = hazardVisual(hazard, index);
                    return (
                      <div className="hazardRow" key={hazard.id ?? index}>

                        <div className="hazardName">
                          <div className={`hazardIcon ${visual.color}`}>
                            {visual.icon}
                          </div>

                          <div>
                            <strong>{hazard.name}</strong>
                            <span>{hazard.description}</span>
                          </div>
                        </div>

                        <span>{hazard.location}</span>

                        <span>{hazard.time_ago}</span>

                        <span className={`severity ${severityClass(hazard.severity)}`}>
                          {severityText(hazard.severity)}
                        </span>

                        <span className="hazardStatus activeStatus">
                          Active
                        </span>

                      </div>
                    );
                  })}

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

                  {(Array.isArray(recommendations) ? recommendations.slice(0, 3) : []).map((rec, index) => (
                    <div className="riskRecommendation" key={rec.id ?? index}>

                      {RECOMMENDATION_ICONS[index % RECOMMENDATION_ICONS.length]}

                      <div>
                        <strong>
                          {rec.action}
                        </strong>

                        <p>
                          {rec.description}
                        </p>
                      </div>

                      <button>
                        Review
                      </button>

                    </div>
                  ))}

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
            </>
          )}

        </div>

      </div>
    </>
  );
}

export default RiskCenter;
