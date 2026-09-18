import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./AIHub.css";

import {
  FaHardHat,
  FaCloudSunRain,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUsers,
  FaSearch,
  FaRobot,
  FaArrowRight
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApiAll } from "../../api/useApi";
import { EmptyState, ErrorState, Skeleton } from "../../components/States/States";

const MODULE_ICONS = {
  hardhat: <FaHardHat />,
  cloud: <FaCloudSunRain />,
  calendar: <FaCalendarAlt />,
  money: <FaMoneyBillWave />,
  users: <FaUsers />,
  search: <FaSearch />,
};

const MODULE_FALLBACK_ICONS = [
  <FaHardHat />,
  <FaCloudSunRain />,
  <FaCalendarAlt />,
  <FaMoneyBillWave />,
  <FaUsers />,
  <FaSearch />,
];

const MODULE_SLOTS = [
  "safetyModule",
  "weatherModule",
  "scheduleModule",
  "costModule",
  "resourceModule",
  "qualityModule",
];

function moduleIcon(module, index) {
  if (module.icon_key && MODULE_ICONS[module.icon_key]) {
    return MODULE_ICONS[module.icon_key];
  }
  return MODULE_FALLBACK_ICONS[index % MODULE_FALLBACK_ICONS.length];
}

function AIHub() {
  const { results, loading, error, retry } = useApiAll([
    endpoints.aihubOverview,
    endpoints.aihubModules,
    endpoints.aihubInsights,
  ]);

  const [overview, modules, insights] = results;

  return (
    <>
      <Sidebar />

      <div className="aiHubPage">

        <Navbar />

        <div className="aiHubContent">

          {/* =========================
              PAGE HEADER
          ========================= */}

          <div className="aiHubHeader">

            <div>

              <h1>
                <FaRobot />
                Construction AI Hub
              </h1>

              <p>
                AI-powered intelligence for safety, weather, schedule,
                cost, resources and quality management.
              </p>

            </div>

            <div className="aiStatus">

              <span></span>

              AI Systems Online

            </div>

          </div>


          {loading && <Skeleton lines={6} />}

          {error && <ErrorState message={error} onRetry={retry} />}

          {!loading && !error && (
            <>
              {/* =========================
                  AI OVERVIEW
              ========================= */}

              <div className="aiOverview">

                <div>
                  <strong>{Array.isArray(modules) ? String(modules.length).padStart(2, "0") : "06"}</strong>
                  <span>AI Agents</span>
                </div>

                <div>
                  <strong>{overview?.monitoring || "24/7"}</strong>
                  <span>Monitoring</span>
                </div>

                <div>
                  <strong>{overview?.sensor_health != null ? `${overview.sensor_health}%` : "98%"}</strong>
                  <span>System Health</span>
                </div>

                <div>
                  <strong>{overview?.zones ?? 32}</strong>
                  <span>Site Zones</span>
                </div>

              </div>


              {/* =========================
                  AI MODULES
              ========================= */}

              <section className="aiModules">

                <div className="sectionTitle">

                  <h2>
                    AI Intelligence Modules
                  </h2>

                  <p>
                    Select an intelligence module to analyze construction data.
                  </p>

                </div>


                {!Array.isArray(modules) || modules.length === 0 ? (
                  <EmptyState message="No AI modules available." />
                ) : (
                  <div className="aiModuleGrid">

                    {modules.map((module, index) => (
                      <div
                        className={`aiModule ${MODULE_SLOTS[index % MODULE_SLOTS.length]}`}
                        key={module.id ?? index}
                      >

                        <div className="moduleTop">

                          <div className="moduleIcon">
                            {moduleIcon(module, index)}
                          </div>

                          <span className="moduleStatus">
                            {module.status || "Active"}
                          </span>

                        </div>

                        <h3>
                          {module.name}
                        </h3>

                        <p>
                          {module.description}
                        </p>

                        <div className="moduleBottom">

                          <span>
                            {module.metric_label}: {module.metric_value}
                          </span>

                          <FaArrowRight />

                        </div>

                      </div>
                    ))}

                  </div>
                )}

              </section>


              {/* =========================
                  AI INSIGHTS
              ========================= */}

              <section className="aiInsights">

                <div className="insightsHeader">

                  <h2>
                    💡 Latest AI Insights
                  </h2>

                  <p>
                    Intelligence generated from current construction data.
                  </p>

                </div>


                {!Array.isArray(insights) || insights.length === 0 ? (
                  <EmptyState message="No insights yet." />
                ) : (
                  <div className="insightList">

                    {insights.map((insight, index) => (
                      <div className="insightItem" key={insight.id ?? index}>

                        <span className={`insightDot ${insight.color || "blue"}`}></span>

                        <div>

                          <strong>
                            {insight.title}
                          </strong>

                          <p>
                            {insight.description}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>
                )}

              </section>
            </>
          )}

        </div>

      </div>
    </>
  );
}

export default AIHub;
