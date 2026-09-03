import "./Recommendations.css";

import {
  FaHardHat,
  FaWind,
  FaExclamationTriangle,
  FaBolt,
  FaArrowRight
} from "react-icons/fa";

function Recommendations() {
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
          5 Actions
        </span>

      </div>


      <div className="recommendationList">

        {/* Recommendation 1 */}

        <div className="recommendation high">

          <div className="recommendationIcon">
            <FaHardHat />
          </div>

          <div className="recommendationContent">

            <div className="recommendationTitle">
              <strong>
                Increase PPE inspections
              </strong>

              <span className="priority highPriority">
                HIGH
              </span>
            </div>

            <p>
              Increase PPE inspection frequency in Zone B.
            </p>

            <small>
              Safety • Immediate action required
            </small>

          </div>

          <FaArrowRight className="recommendationArrow" />

        </div>


        {/* Recommendation 2 */}

        <div className="recommendation medium">

          <div className="recommendationIcon">
            <FaWind />
          </div>

          <div className="recommendationContent">

            <div className="recommendationTitle">
              <strong>
                Delay crane operation
              </strong>

              <span className="priority mediumPriority">
                MEDIUM
              </span>
            </div>

            <p>
              Strong wind conditions detected near Crane Area.
            </p>

            <small>
              Weather • Review before operation
            </small>

          </div>

          <FaArrowRight className="recommendationArrow" />

        </div>


        {/* Recommendation 3 */}

        <div className="recommendation medium">

          <div className="recommendationIcon">
            <FaExclamationTriangle />
          </div>

          <div className="recommendationContent">

            <div className="recommendationTitle">
              <strong>
                Repair safety barrier
              </strong>

              <span className="priority mediumPriority">
                MEDIUM
              </span>
            </div>

            <p>
              Damaged safety barrier detected near Zone C.
            </p>

            <small>
              Site Safety • Zone C
            </small>

          </div>

          <FaArrowRight className="recommendationArrow" />

        </div>


        {/* Recommendation 4 */}

        <div className="recommendation low">

          <div className="recommendationIcon">
            <FaBolt />
          </div>

          <div className="recommendationContent">

            <div className="recommendationTitle">
              <strong>
                Inspect electrical wiring
              </strong>

              <span className="priority lowPriority">
                LOW
              </span>
            </div>

            <p>
              Preventive inspection recommended in Basement.
            </p>

            <small>
              Electrical • Preventive inspection
            </small>

          </div>

          <FaArrowRight className="recommendationArrow" />

        </div>

      </div>

      <div className="aiFooter">
        ✨ Recommendations generated from current site risk conditions
      </div>

    </div>
  );
}

export default Recommendations;