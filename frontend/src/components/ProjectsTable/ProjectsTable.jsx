import "./ProjectsTable.css";

import {
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { EmptyState, ErrorState, Skeleton } from "../States/States";

const ICON_COLORS = ["blue", "green", "red", "orange", "purple", "teal"];

function iconColor(index, project) {
  if (project.color) {
    const map = {
      "#3B82F6": "blue",
      "#10B981": "green",
      "#EF4444": "red",
      "#F59E0B": "orange",
      "#8B5CF6": "purple",
      "#14B8A6": "teal",
    };
    if (map[project.color]) return map[project.color];
  }
  return ICON_COLORS[index % ICON_COLORS.length];
}

function riskBadgeClass(riskLevel) {
  const key = (riskLevel || "").toLowerCase();
  if (key === "low") return "low";
  if (key === "high") return "high";
  return "medium";
}

function riskBadgeText(riskLevel) {
  const key = (riskLevel || "").toLowerCase();
  if (key === "low") return "● Low";
  if (key === "high") return "● High";
  return "● Medium";
}

function statusBadgeClass(status) {
  const key = (status || "").toLowerCase();
  if (key === "on track") return "onTrackStatus";
  if (key === "delayed") return "delayedStatus";
  return "progressStatus";
}

function statusBadgeText(status) {
  if (!status) return "In Progress";
  return status
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function ProjectsTable() {
  const { data, loading, error, retry } = useApi(endpoints.projects);

  if (loading) {
    return (
      <section className="projectsTable">
        <div className="projectsHeader">
          <div>
            <h2>
              <FaBuilding />
              Active Construction Projects
            </h2>
            <p>Current project progress, risk level and operational status</p>
          </div>
        </div>
        <Skeleton lines={5} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="projectsTable">
        <div className="projectsHeader">
          <div>
            <h2>
              <FaBuilding />
              Active Construction Projects
            </h2>
            <p>Current project progress, risk level and operational status</p>
          </div>
        </div>
        <ErrorState message={error} onRetry={retry} />
      </section>
    );
  }

  const projects = Array.isArray(data) ? data : [];

  if (projects.length === 0) {
    return (
      <section className="projectsTable">
        <div className="projectsHeader">
          <div>
            <h2>
              <FaBuilding />
              Active Construction Projects
            </h2>
            <p>Current project progress, risk level and operational status</p>
          </div>
        </div>
        <EmptyState message="No active projects." />
      </section>
    );
  }

  return (
    <section className="projectsTable">

      {/* Header */}

      <div className="projectsHeader">

        <div>
          <h2>
            <FaBuilding />
            Active Construction Projects
          </h2>

          <p>
            Current project progress, risk level and operational status
          </p>
        </div>

        <button className="viewProjects">
          View All
          <FaArrowRight />
        </button>

      </div>


      {/* Table */}

      <div className="tableWrapper">

        <table>

          <thead>

            <tr>
              <th>Project</th>
              <th>Progress</th>
              <th>Risk Level</th>
              <th>Timeline</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {projects.map((project, index) => (
              <tr key={project.id ?? index}>

                <td>
                  <div className="projectName">
                    <div className={`projectIcon ${iconColor(index, project)}`}>
                      {(project.name || "?").charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <strong>{project.name}</strong>
                      <span>Project {project.code}</span>
                    </div>
                  </div>
                </td>


                <td>

                  <div className="progressInfo">
                    <span>{project.progress}%</span>
                  </div>

                  <div className="tableProgress">
                    <div
                      className={`tableProgressFill ${iconColor(index, project)}Progress`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>

                </td>


                <td>
                  <span className={`riskBadge ${riskBadgeClass(project.risk_level)}`}>
                    {riskBadgeText(project.risk_level)}
                  </span>
                </td>


                <td>
                  <span className="timelineText">
                    {project.days_left} Days Left
                  </span>
                </td>


                <td>
                  <span className={`statusBadge ${statusBadgeClass(project.status)}`}>
                    {statusBadgeText(project.status)}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>


      {/* Footer */}

      <div className="projectsFooter">

        <span>
          {projects.length} Active Projects
        </span>

        <span>
          Last updated from project data
        </span>

      </div>

    </section>
  );
}

export default ProjectsTable;
