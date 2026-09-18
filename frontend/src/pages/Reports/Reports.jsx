import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Reports.css";

import {
  FaChartBar,
  FaDownload,
  FaFileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaRobot,
  FaCalendarAlt,
  FaArrowUp
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApiAll } from "../../api/useApi";
import { ErrorState, Skeleton } from "../../components/States/States";

const FILE_ICON_FALLBACK = [<FaFileAlt />, <FaShieldAlt />, <FaCalendarAlt />, <FaRobot />];

const PROGRESS_FILLS = ["blueProgress", "greenProgress", "purpleProgress", "orangeProgress"];

function fileIcon(report, index) {
  const key = (report.color || "").toLowerCase();
  if (key.includes("3b82f6") || key === "blue") return { icon: <FaFileAlt />, color: "blue" };
  if (key.includes("10b981") || key === "green") return { icon: <FaShieldAlt />, color: "green" };
  if (key.includes("f59e0b") || key === "orange") return { icon: <FaCalendarAlt />, color: "orange" };
  if (key.includes("8b5cf6") || key === "purple") return { icon: <FaRobot />, color: "purple" };
  const fallback = ["blue", "green", "orange", "purple"][index % 4];
  return { icon: FILE_ICON_FALLBACK[index % FILE_ICON_FALLBACK.length], color: fallback };
}

function progressNumber(value) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) ? n : 0;
}

function Reports() {
  const { results, loading, error, retry } = useApiAll([
    endpoints.reportsSummary,
    endpoints.reports,
    endpoints.reportsPerformance,
    endpoints.reportsInsight,
  ]);

  const [summary, reports, performance, insight] = results;

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


          {loading && <Skeleton lines={6} />}

          {error && <ErrorState message={error} onRetry={retry} />}

          {!loading && !error && (
            <>
              {/* =========================
                  REPORT SUMMARY
              ========================= */}

              <div className="reportSummary">

                <div className="reportCard">

                  <div className="reportIcon blue">
                    <FaFileAlt />
                  </div>

                  <span>Total Reports</span>

                  <strong>{summary?.total_reports ?? 0}</strong>

                  <small>
                    +4 this month
                  </small>

                </div>


                <div className="reportCard">

                  <div className="reportIcon green">
                    <FaShieldAlt />
                  </div>

                  <span>Safety Score</span>

                  <strong>{summary?.safety_score ?? 0}%</strong>

                  <small className="positive">
                    <FaArrowUp /> 3% improvement
                  </small>

                </div>


                <div className="reportCard">

                  <div className="reportIcon orange">
                    <FaExclamationTriangle />
                  </div>

                  <span>Risk Events</span>

                  <strong>{summary?.risk_events ?? 0}</strong>

                  <small className="negative">
                    <FaArrowUp /> 4% this week
                  </small>

                </div>


                <div className="reportCard">

                  <div className="reportIcon purple">
                    <FaRobot />
                  </div>

                  <span>AI Insights</span>

                  <strong>{summary?.ai_insights ?? 0}</strong>

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

                  {(Array.isArray(performance) ? performance : []).map((metric, index) => (
                    <div className="performanceItem" key={metric.id ?? index}>

                      <div className="performanceTop">
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>

                      <div className="reportProgress">
                        <div
                          className={`reportProgressFill ${PROGRESS_FILLS[index % PROGRESS_FILLS.length]}`}
                          style={{ width: `${progressNumber(metric.value)}%` }}
                        ></div>
                      </div>

                      <small>
                        Target: {metric.target}
                      </small>

                    </div>
                  ))}

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


                  {(Array.isArray(reports) ? reports : []).map((report, index) => {
                    const visual = fileIcon(report, index);
                    return (
                      <div className="reportRow" key={report.id ?? index}>

                        <div className="reportName">
                          <div className={`fileIcon ${visual.color}`}>
                            {visual.icon}
                          </div>

                          <div>
                            <strong>
                              {report.name}
                            </strong>

                            <small>
                              {report.code}
                            </small>
                          </div>
                        </div>

                        <span>{report.type}</span>

                        <span>
                          {report.generated_at}
                        </span>

                        <span className="completedReport">
                          {report.status}
                        </span>

                        <button className="downloadButton" aria-label={`Download ${report.name}`}>
                          <FaDownload />
                        </button>

                      </div>
                    );
                  })}

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
                    {insight?.text || "No insight available."}
                  </p>

                </div>

                <div className="insightScore">
                  <span>AI Confidence</span>
                  <strong>{insight?.ai_confidence ?? 0}%</strong>
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
            </>
          )}

        </div>

      </div>
    </>
  );
}

export default Reports;
