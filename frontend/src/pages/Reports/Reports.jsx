import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Reports.css";

import {
  FaChartBar,
  FaDownload,
  FaFileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaHardHat,
  FaRobot,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

function Reports() {
  return (
    <>
      <Sidebar />

      <div className="reportsPage">

        <Navbar />

        <div className="reportsContent">

          {/* =========================
              HEADER
          ========================= */}

          <div className="reportsHeader">

            <div>
              <h1>
                <FaChartBar />
                Construction Reports
              </h1>

              <p>
                Project performance, safety, risk and AI intelligence
                reports in one place.
              </p>
            </div>

            <button className="generateReport">
              <FaDownload />
              Generate Report
            </button>

          </div>


          {/* =========================
              REPORT SUMMARY
          ========================= */}

          <div className="reportSummary">

            <div className="reportCard">

              <div className="reportIcon blue">
                <FaFileAlt />
              </div>

              <span>Total Reports</span>

              <strong>24</strong>

              <small>
                +4 this month
              </small>

            </div>


            <div className="reportCard">

              <div className="reportIcon green">
                <FaShieldAlt />
              </div>

              <span>Safety Score</span>

              <strong>96%</strong>

              <small className="positive">
                <FaArrowUp /> 3% improvement
              </small>

            </div>


            <div className="reportCard">

              <div className="reportIcon orange">
                <FaExclamationTriangle />
              </div>

              <span>Risk Events</span>

              <strong>14</strong>

              <small className="negative">
                <FaArrowUp /> 4% this week
              </small>

            </div>


            <div className="reportCard">

              <div className="reportIcon purple">
                <FaRobot />
              </div>

              <span>AI Insights</span>

              <strong>38</strong>

              <small className="positive">
                12 acted upon
              </small>

            </div>

          </div>


          {/* =========================
              PERFORMANCE
          ========================= */}

          <section className="performancePanel">

            <div className="reportSectionHeader">

              <div>
                <h2>Project Performance</h2>

                <p>
                  Current construction performance indicators
                </p>
              </div>

              <span className="periodBadge">
                This Month
              </span>

            </div>


            <div className="performanceGrid">


              {/* Progress */}

              <div className="performanceItem">

                <div className="performanceTop">
                  <span>Project Progress</span>
                  <strong>72%</strong>
                </div>

                <div className="reportProgress">
                  <div
                    className="reportProgressFill blueProgress"
                    style={{ width: "72%" }}
                  ></div>
                </div>

                <small>
                  Target: 80%
                </small>

              </div>


              {/* Safety */}

              <div className="performanceItem">

                <div className="performanceTop">
                  <span>Safety Compliance</span>
                  <strong>96%</strong>
                </div>

                <div className="reportProgress">
                  <div
                    className="reportProgressFill greenProgress"
                    style={{ width: "96%" }}
                  ></div>
                </div>

                <small>
                  Target: 95%
                </small>

              </div>


              {/* Quality */}

              <div className="performanceItem">

                <div className="performanceTop">
                  <span>Quality Score</span>
                  <strong>93%</strong>
                </div>

                <div className="reportProgress">
                  <div
                    className="reportProgressFill purpleProgress"
                    style={{ width: "93%" }}
                  ></div>
                </div>

                <small>
                  Target: 90%
                </small>

              </div>


              {/* Schedule */}

              <div className="performanceItem">

                <div className="performanceTop">
                  <span>Schedule Health</span>
                  <strong>78%</strong>
                </div>

                <div className="reportProgress">
                  <div
                    className="reportProgressFill orangeProgress"
                    style={{ width: "78%" }}
                  ></div>
                </div>

                <small>
                  Target: 85%
                </small>

              </div>

            </div>

          </section>


          {/* =========================
              REPORT HISTORY
          ========================= */}

          <section className="reportHistory">

            <div className="reportSectionHeader">

              <div>
                <h2>
                  <FaFileAlt />
                  Recent Reports
                </h2>

                <p>
                  Generated project intelligence reports
                </p>
              </div>

            </div>


            <div className="reportTable">

              <div className="reportTableHeader">
                <span>Report</span>
                <span>Type</span>
                <span>Generated</span>
                <span>Status</span>
                <span>Action</span>
              </div>


              <div className="reportRow">

                <div className="reportName">
                  <div className="fileIcon blue">
                    <FaFileAlt />
                  </div>

                  <div>
                    <strong>
                      Weekly Risk Assessment
                    </strong>

                    <small>
                      RPT-2026-042
                    </small>
                  </div>
                </div>

                <span>Risk</span>

                <span>
                  Today, 10:30 AM
                </span>

                <span className="completedReport">
                  Completed
                </span>

                <button className="downloadButton">
                  <FaDownload />
                </button>

              </div>


              <div className="reportRow">

                <div className="reportName">
                  <div className="fileIcon green">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <strong>
                      Safety Performance Report
                    </strong>

                    <small>
                      RPT-2026-041
                    </small>
                  </div>
                </div>

                <span>Safety</span>

                <span>
                  Yesterday, 4:15 PM
                </span>

                <span className="completedReport">
                  Completed
                </span>

                <button className="downloadButton">
                  <FaDownload />
                </button>

              </div>


              <div className="reportRow">

                <div className="reportName">
                  <div className="fileIcon orange">
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <strong>
                      Schedule Performance
                    </strong>

                    <small>
                      RPT-2026-040
                    </small>
                  </div>
                </div>

                <span>Schedule</span>

                <span>
                  2 days ago
                </span>

                <span className="completedReport">
                  Completed
                </span>

                <button className="downloadButton">
                  <FaDownload />
                </button>

              </div>


              <div className="reportRow">

                <div className="reportName">
                  <div className="fileIcon purple">
                    <FaRobot />
                  </div>

                  <div>
                    <strong>
                      AI Intelligence Summary
                    </strong>

                    <small>
                      RPT-2026-039
                    </small>
                  </div>
                </div>

                <span>AI</span>

                <span>
                  3 days ago
                </span>

                <span className="completedReport">
                  Completed
                </span>

                <button className="downloadButton">
                  <FaDownload />
                </button>

              </div>

            </div>

          </section>


          {/* =========================
              AI REPORT INSIGHT
          ========================= */}

          <section className="reportInsight">

            <div className="insightRobot">
              <FaRobot />
            </div>

            <div>

              <h3>
                AI Report Insight
              </h3>

              <p>
                Overall project performance remains stable.
                Safety compliance is above target, while schedule
                health requires additional monitoring due to
                increasing structural activity risks.
              </p>

            </div>

            <div className="insightScore">
              <span>AI Confidence</span>
              <strong>94%</strong>
            </div>

          </section>


          {/* Footer */}

          <div className="reportsFooter">

            <span>
              Reports powered by Construction Intelligence Hub
            </span>

            <span>
              Last updated: 2 minutes ago
            </span>

          </div>

        </div>

      </div>
    </>
  );
}

export default Reports;