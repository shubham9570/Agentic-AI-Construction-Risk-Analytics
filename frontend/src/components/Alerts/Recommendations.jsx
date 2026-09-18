import "./Recommendations.css";

import {
  FaHardHat,
  FaWind,
  FaExclamationTriangle,
  FaBolt,
  FaArrowRight,
  FaTools
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { EmptyState, ErrorState, Skeleton } from "../States/States";

const PRIORITY_STYLES = {
  HIGH: { rowClass: "high", badgeClass: "highPriority" },
  MEDIUM: { rowClass: "medium", badgeClass: "mediumPriority" },
  LOW: { rowClass: "low", badgeClass: "lowPriority" },
};

const CATEGORY_ICONS = {
  hardhat: <FaHardHat />,
  wind: <FaWind />,
  triangle: <FaExclamationTriangle />,
  bolt: <FaBolt />,
  tools: <FaTools />,
};

function priorityStyle(priority) {
  const key = (priority || "").toUpperCase();
  return PRIORITY_STYLES[key] || PRIORITY_STYLES.MEDIUM;
}

function categoryIcon(iconKey, priority) {
  if (iconKey && CATEGORY_ICONS[iconKey]) return CATEGORY_ICONS[iconKey];
  const key = (priority || "").toUpperCase();
  if (key === "HIGH") return <FaHardHat />;
  if (key === "LOW") return <FaBolt />;
  return <FaExclamationTriangle />;
}

function categorySubtitle(rec) {
  const category = rec.category || "";
  if (category === "Safety") return "Safety • Immediate action required";
  if (category === "Weather") return "Weather • Review before operation";
  if (category === "Electrical") return "Electrical • Preventive inspection";
  return category ? `${category} • Review recommended` : "Review recommended";
}

function Recommendations() {
  const { data, loading, error, retry } = useApi(endpoints.recommendations);

  if (loading) {
    return (
      <div className="recommendations">
        <div className="recommendationHeader">
          <div>
            <h2>🤖 AI Recommendations</h2>
            <p>Intelligent actions based on current site conditions</p>
          </div>
        </div>
        <Skeleton lines={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="recommendations">
        <div className="recommendationHeader">
          <div>
            <h2>🤖 AI Recommendations</h2>
            <p>Intelligent actions based on current site conditions</p>
          </div>
        </div>
        <ErrorState message={error} onRetry={retry} />
      </div>
    );
  }

  const recommendations = Array.isArray(data) ? data : [];

  if (recommendations.length === 0) {
    return (
      <div className="recommendations">
        <div className="recommendationHeader">
          <div>
            <h2>🤖 AI Recommendations</h2>
            <p>Intelligent actions based on current site conditions</p>
          </div>
        </div>
        <EmptyState message="No recommendations right now." />
      </div>
    );
  }

  return (
    <div className="recommendations">

      <div className="recommendationHeader">

        <div>
          <h2>
            🤖 AI Recommendations
          </h2>

          <p>
            Intelligent actions based on current site conditions
          </p>
        </div>

        <span className="actionCount">
          {recommendations.length} Actions
        </span>

      </div>


      <div className="recommendationList">

        {recommendations.map((rec, index) => {
          const style = priorityStyle(rec.priority);
          return (
            <div className={`recommendation ${style.rowClass}`} key={rec.id ?? index}>

              <div className="recommendationIcon">
                {categoryIcon(rec.icon_key, rec.priority)}
              </div>

              <div className="recommendationContent">

                <div className="recommendationTitle">
                  <strong>
                    {rec.action}
                  </strong>

                  <span className={`priority ${style.badgeClass}`}>
                    {(rec.priority || "").toUpperCase()}
                  </span>
                </div>

                <p>
                  {rec.description}
                </p>

                <small>
                  {categorySubtitle(rec)}
                </small>

              </div>

              <FaArrowRight className="recommendationArrow" />

            </div>
          );
        })}

      </div>

      <div className="aiFooter">
        ✨ Recommendations generated from current site risk conditions
      </div>

    </div>
  );
}

export default Recommendations;
