import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaHardHat,
  FaMoneyBillWave,
  FaTasks,
  FaArrowRight,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApiAll } from "../../api/useApi";
import { EmptyState, ErrorState, Skeleton } from "../../components/States/States";

import "./Projects.css";

const ICON_STYLES = ["", "purpleProject", "greenProject", "orangeProject"];
const FILL_STYLES = ["blue", "purple", "green", "orange"];

function statusBadgeClass(status) {
  const key = (status || "").toLowerCase();
  if (key === "delayed" || key === "at risk") return "warningStatus";
  return "activeStatus";
}

function statusBadgeText(status) {
  if (!status) return "Active";
  const key = status.toLowerCase();
  if (key === "on track") return "Active";
  if (key === "in progress") return "Active";
  return status
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function Projects() {
  const { results, loading, error, retry } = useApiAll([
    endpoints.projects,
    endpoints.projectsSummary,
    endpoints.projectsPerformance,
  ]);

  const [projects, summary, performance] = results;

  return (
    <>
      <Sidebar />

      <div className="projectsPage">

        <Navbar />

        <div className="projectsContent">

          {/* =========================
              HEADER
          ========================= */}

          <div className="projectsHeader">

            <div>
              <h1>
                <FaBuilding />
                Construction Projects
              </h1>

              <p>
                Monitor project progress, resources, schedules and
                construction performance.
              </p>
            </div>

            <button className="newProjectButton">
              + New Project
            </button>

          </div>


          {loading && <Skeleton lines={6} />}

          {error && <ErrorState message={error} onRetry={retry} />}

          {!loading && !error && (
            <>
              {/* =========================
                  SUMMARY CARDS
              ========================= */}

              <div className="projectSummary">

                <div className="projectSummaryCard">

                  <div className="summaryIcon blue">
                    <FaBuilding />
                  </div>

                  <div>
                    <span>Total Projects</span>
                    <strong>{String(summary?.total_projects ?? 0).padStart(2, "0")}</strong>
                    <small>{summary?.total_projects ?? 0} active projects</small>
                  </div>

                </div>


                <div className="projectSummaryCard">

                  <div className="summaryIcon green">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <span>On Schedule</span>
                    <strong>{String(summary?.on_schedule ?? 0).padStart(2, "0")}</strong>
                    <small>
                      {summary?.total_projects
                        ? `${Math.round(((summary?.on_schedule ?? 0) / summary.total_projects) * 100)}% of projects`
                        : "—"}
                    </small>
                  </div>

                </div>


                <div className="projectSummaryCard">

                  <div className="summaryIcon orange">
                    <FaClock />
                  </div>

                  <div>
                    <span>At Risk</span>
                    <strong>{String(summary?.at_risk ?? 0).padStart(2, "0")}</strong>
                    <small>Needs attention</small>
                  </div>

                </div>


                <div className="projectSummaryCard">

                  <div className="summaryIcon purple">
                    <FaTasks />
                  </div>

                  <div>
                    <span>Completed</span>
                    <strong>{String(summary?.completed ?? 0).padStart(2, "0")}</strong>
                    <small>This quarter</small>
                  </div>

                </div>

              </div>


              {/* =========================
                  ACTIVE PROJECTS
              ========================= */}

              <section className="projectsSection">

                <div className="sectionTitle">

                  <div>
                    <h2>Active Projects</h2>

                    <p>
                      Current construction projects and performance
                    </p>
                  </div>

                  <button className="viewAllButton">
                    View All
                    <FaArrowRight />
                  </button>

                </div>


                {!Array.isArray(projects) || projects.length === 0 ? (
                  <EmptyState message="No projects found." />
                ) : (
                  <div className="projectGrid">

                    {projects.map((project, index) => (
                      <div className="projectCard" key={project.id ?? index}>

                        <div className="projectTop">

                          <div className={`projectIcon ${ICON_STYLES[index % ICON_STYLES.length]}`}>
                            <FaBuilding />
                          </div>

                          <span className={`status ${statusBadgeClass(project.status)}`}>
                            {statusBadgeText(project.status)}
                          </span>

                        </div>


                        <h3>
                          {project.name}
                        </h3>

                        <p className="projectLocation">
                          <FaMapMarkerAlt />
                          {project.location || project.code}
                        </p>


                        <div className="projectDetails">

                          <div>
                            <span>Progress</span>
                            <strong>{project.progress}%</strong>
                          </div>

                          <div>
                            <span>Budget</span>
                            <strong>{project.budget || "—"}</strong>
                          </div>

                        </div>


                        <div className="projectProgress">

                          <div className="progressBar">
                            <div
                              className={`progressFill ${FILL_STYLES[index % FILL_STYLES.length]}`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>

                        </div>


                        <div className="projectFooter">

                          <span>
                            <FaCalendarAlt />
                            {project.deadline || "—"}
                          </span>

                          <span>
                            <FaUsers />
                            {project.workers_count} workers
                          </span>

                        </div>

                      </div>
                    ))}

                  </div>
                )}

              </section>


              {/* =========================
                  PROJECT PERFORMANCE
              ========================= */}

              <section className="projectPerformance">

                <div className="sectionTitle">

                  <div>
                    <h2>Project Performance</h2>

                    <p>
                      Overall construction performance indicators
                    </p>
                  </div>

                </div>


                <div className="performanceCards">

                  <div className="performanceCard">
                    <FaTasks />
                    <span>Average Progress</span>
                    <strong>{performance?.average_progress ?? 0}%</strong>
                  </div>

                  <div className="performanceCard">
                    <FaMoneyBillWave />
                    <span>Budget Utilization</span>
                    <strong>{performance?.budget_utilization ?? 0}%</strong>
                  </div>

                  <div className="performanceCard">
                    <FaHardHat />
                    <span>Safety Compliance</span>
                    <strong>{performance?.safety_compliance ?? 0}%</strong>
                  </div>

                  <div className="performanceCard">
                    <FaCalendarAlt />
                    <span>Schedule Health</span>
                    <strong>{performance?.schedule_health ?? 0}%</strong>
                  </div>

                </div>

              </section>
            </>
          )}

        </div>

      </div>
    </>
  );
}

export default Projects;
