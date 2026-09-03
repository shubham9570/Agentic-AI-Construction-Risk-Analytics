import "./Milestones.css";

import {
  FaCheckCircle,
  FaClock,
  FaCircle,
  FaHardHat
} from "react-icons/fa";

function Milestones() {
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
          <strong>72%</strong>
        </div>

      </div>


      <div className="timeline">

        {/* Planning */}

        <div className="milestone completed">

          <div className="timelineIcon">
            <FaCheckCircle />
          </div>

          <div className="milestoneContent">

            <div className="milestoneTop">
              <div>
                <h3>Planning</h3>
                <p>Project planning and site preparation</p>
              </div>

              <span className="completedBadge">
                Completed
              </span>
            </div>

            <div className="progressBar">
              <div
                className="progressFill planning"
                style={{ width: "100%" }}
              ></div>
            </div>

            <span className="progressText">
              100% Complete
            </span>

          </div>

        </div>


        {/* Foundation */}

        <div className="milestone completed">

          <div className="timelineIcon">
            <FaCheckCircle />
          </div>

          <div className="milestoneContent">

            <div className="milestoneTop">

              <div>
                <h3>Foundation</h3>
                <p>Foundation and structural base completed</p>
              </div>

              <span className="completedBadge">
                Completed
              </span>

            </div>

            <div className="progressBar">
              <div
                className="progressFill foundation"
                style={{ width: "100%" }}
              ></div>
            </div>

            <span className="progressText">
              100% Complete
            </span>

          </div>

        </div>


        {/* Structure */}

        <div className="milestone active">

          <div className="timelineIcon">
            <FaClock />
          </div>

          <div className="milestoneContent">

            <div className="milestoneTop">

              <div>
                <h3>Structure</h3>
                <p>Building structure and framework construction</p>
              </div>

              <span className="activeBadge">
                In Progress
              </span>

            </div>

            <div className="progressBar">
              <div
                className="progressFill structure"
                style={{ width: "75%" }}
              ></div>
            </div>

            <span className="progressText">
              75% Complete
            </span>

          </div>

        </div>


        {/* Roofing */}

        <div className="milestone upcoming">

          <div className="timelineIcon">
            <FaCircle />
          </div>

          <div className="milestoneContent">

            <div className="milestoneTop">

              <div>
                <h3>Roofing</h3>
                <p>Roof installation and weather protection</p>
              </div>

              <span className="upcomingBadge">
                Upcoming
              </span>

            </div>

            <div className="progressBar">
              <div
                className="progressFill roofing"
                style={{ width: "0%" }}
              ></div>
            </div>

            <span className="progressText">
              Not Started
            </span>

          </div>

        </div>


        {/* Finishing */}

        <div className="milestone upcoming">

          <div className="timelineIcon">
            <FaCircle />
          </div>

          <div className="milestoneContent">

            <div className="milestoneTop">

              <div>
                <h3>Finishing</h3>
                <p>Interior finishing and final inspection</p>
              </div>

              <span className="upcomingBadge">
                Upcoming
              </span>

            </div>

            <div className="progressBar">
              <div
                className="progressFill finishing"
                style={{ width: "0%" }}
              ></div>
            </div>

            <span className="progressText">
              Not Started
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Milestones;