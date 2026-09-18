import "./Milestones.css";

import {
  FaCheckCircle,
  FaClock,
  FaCircle,
  FaHardHat
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { EmptyState, ErrorState, Skeleton } from "../States/States";

function statusMeta(status) {
  const key = (status || "").toLowerCase();
  if (key === "completed") {
    return {
      rowClass: "completed",
      icon: <FaCheckCircle />,
      badgeClass: "completedBadge",
      badgeText: "Completed",
    };
  }
  if (key === "in_progress" || key === "in progress" || key === "active") {
    return {
      rowClass: "active",
      icon: <FaClock />,
      badgeClass: "activeBadge",
      badgeText: "In Progress",
    };
  }
  return {
    rowClass: "upcoming",
    icon: <FaCircle />,
    badgeClass: "upcomingBadge",
    badgeText: "Upcoming",
  };
}

function progressText(milestone, meta) {
  if (meta.rowClass === "completed" || milestone.progress >= 100) {
    return "100% Complete";
  }
  if (meta.rowClass === "active") {
    return `${milestone.progress}% Complete`;
  }
  if (milestone.progress > 0) {
    return `${milestone.progress}% Complete`;
  }
  return "Not Started";
}

function Milestones() {
  const { data, loading, error, retry } = useApi(endpoints.milestones);

  if (loading) {
    return (
      <section className="milestones">
        <div className="milestoneHeader">
          <div>
            <h2>
              <FaHardHat />
              Project Milestones
            </h2>
            <p>Track major construction phases and project completion status</p>
          </div>
        </div>
        <Skeleton lines={5} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="milestones">
        <div className="milestoneHeader">
          <div>
            <h2>
              <FaHardHat />
              Project Milestones
            </h2>
            <p>Track major construction phases and project completion status</p>
          </div>
        </div>
        <ErrorState message={error} onRetry={retry} />
      </section>
    );
  }

  const milestones = Array.isArray(data) ? data : [];

  if (milestones.length === 0) {
    return (
      <section className="milestones">
        <div className="milestoneHeader">
          <div>
            <h2>
              <FaHardHat />
              Project Milestones
            </h2>
            <p>Track major construction phases and project completion status</p>
          </div>
        </div>
        <EmptyState message="No milestones yet." />
      </section>
    );
  }

  const overall = Math.round(
    milestones.reduce((sum, m) => sum + (m.progress || 0), 0) / milestones.length
  );

  return (
    <section className="milestones">

      <div className="milestoneHeader">

        <div>
          <h2>
            <FaHardHat />
            Project Milestones
          </h2>

          <p>
            Track major construction phases and project completion status
          </p>
        </div>

        <div className="projectProgress">
          <span>Overall Progress</span>
          <strong>{overall}%</strong>
        </div>

      </div>


      <div className="timeline">

        {milestones.map((milestone) => {
          const meta = statusMeta(milestone.status);
          const fillClass = `progressFill ${milestone.name.toLowerCase()}`;
          return (
            <div className={`milestone ${meta.rowClass}`} key={milestone.id ?? milestone.name}>

              <div className="timelineIcon">
                {meta.icon}
              </div>

              <div className="milestoneContent">

                <div className="milestoneTop">
                  <div>
                    <h3>{milestone.name}</h3>
                    <p>{milestone.description}</p>
                  </div>

                  <span className={meta.badgeClass}>
                    {meta.badgeText}
                  </span>
                </div>

                <div className="progressBar">
                  <div
                    className={fillClass}
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>

                <span className="progressText">
                  {progressText(milestone, meta)}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Milestones;
