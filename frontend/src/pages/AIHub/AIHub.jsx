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

function AIHub() {
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


          {/* =========================
              AI OVERVIEW
          ========================= */}

          <div className="aiOverview">

            <div>
              <strong>06</strong>
              <span>AI Agents</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>System Health</span>
            </div>

            <div>
              <strong>32</strong>
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


            <div className="aiModuleGrid">


              {/* SAFETY */}

              <div className="aiModule safetyModule">

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <FaHardHat />
                  </div>

                  <span className="moduleStatus">
                    Active
                  </span>

                </div>

                <h3>
                  Safety Intelligence
                </h3>

                <p>
                  Detect PPE violations, unsafe activities and
                  construction site hazards using AI monitoring.
                </p>

                <div className="moduleBottom">

                  <span>
                    Risk Detection: 96%
                  </span>

                  <FaArrowRight />

                </div>

              </div>


              {/* WEATHER */}

              <div className="aiModule weatherModule">

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <FaCloudSunRain />
                  </div>

                  <span className="moduleStatus">
                    Active
                  </span>

                </div>

                <h3>
                  Weather Risk Prediction
                </h3>

                <p>
                  Analyze weather conditions and predict potential
                  construction disruptions and safety risks.
                </p>

                <div className="moduleBottom">

                  <span>
                    Prediction: 91%
                  </span>

                  <FaArrowRight />

                </div>

              </div>


              {/* SCHEDULE */}

              <div className="aiModule scheduleModule">

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <FaCalendarAlt />
                  </div>

                  <span className="moduleStatus">
                    Active
                  </span>

                </div>

                <h3>
                  Schedule Intelligence
                </h3>

                <p>
                  Predict project delays and identify activities
                  that may impact the construction timeline.
                </p>

                <div className="moduleBottom">

                  <span>
                    Delay Prediction: 87%
                  </span>

                  <FaArrowRight />

                </div>

              </div>


              {/* COST */}

              <div className="aiModule costModule">

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <FaMoneyBillWave />
                  </div>

                  <span className="moduleStatus">
                    Active
                  </span>

                </div>

                <h3>
                  Cost Intelligence
                </h3>

                <p>
                  Monitor project spending and predict possible
                  budget overruns before they occur.
                </p>

                <div className="moduleBottom">

                  <span>
                    Forecast Accuracy: 89%
                  </span>

                  <FaArrowRight />

                </div>

              </div>


              {/* RESOURCE */}

              <div className="aiModule resourceModule">

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <FaUsers />
                  </div>

                  <span className="moduleStatus">
                    Active
                  </span>

                </div>

                <h3>
                  Resource Optimization
                </h3>

                <p>
                  Optimize allocation of workers, equipment and
                  materials across construction activities.
                </p>

                <div className="moduleBottom">

                  <span>
                    Optimization: 94%
                  </span>

                  <FaArrowRight />

                </div>

              </div>


              {/* QUALITY */}

              <div className="aiModule qualityModule">

                <div className="moduleTop">

                  <div className="moduleIcon">
                    <FaSearch />
                  </div>

                  <span className="moduleStatus">
                    Active
                  </span>

                </div>

                <h3>
                  Quality Intelligence
                </h3>

                <p>
                  Identify construction defects and quality issues
                  using intelligent inspection and analysis.
                </p>

                <div className="moduleBottom">

                  <span>
                    Detection Accuracy: 93%
                  </span>

                  <FaArrowRight />

                </div>

              </div>

            </div>

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


            <div className="insightList">


              {/* INSIGHT 1 */}

              <div className="insightItem">

                <span className="insightDot red"></span>

                <div>

                  <strong>
                    Safety Risk Increased
                  </strong>

                  <p>
                    PPE violations increased in Zone B.
                    Additional inspection is recommended.
                  </p>

                </div>

              </div>


              {/* INSIGHT 2 */}

              <div className="insightItem">

                <span className="insightDot orange"></span>

                <div>

                  <strong>
                    Weather Impact Detected
                  </strong>

                  <p>
                    Heavy rainfall may affect outdoor construction
                    activities within the next 24 hours.
                  </p>

                </div>

              </div>


              {/* INSIGHT 3 */}

              <div className="insightItem">

                <span className="insightDot blue"></span>

                <div>

                  <strong>
                    Schedule Risk Identified
                  </strong>

                  <p>
                    Structure activities are showing signs of
                    potential schedule delay.
                  </p>

                </div>

              </div>


            </div>

          </section>

        </div>

      </div>
    </>
  );
}

export default AIHub;