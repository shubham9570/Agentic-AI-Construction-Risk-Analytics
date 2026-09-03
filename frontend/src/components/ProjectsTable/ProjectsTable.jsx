import "./ProjectsTable.css";

import {
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

function ProjectsTable() {
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

            {/* Project 1 */}

            <tr>

              <td>
                <div className="projectName">
                  <div className="projectIcon blue">
                    A
                  </div>

                  <div>
                    <strong>Metro Station</strong>
                    <span>Project MS-204</span>
                  </div>
                </div>
              </td>


              <td>

                <div className="progressInfo">
                  <span>72%</span>
                </div>

                <div className="tableProgress">
                  <div
                    className="tableProgressFill blueProgress"
                    style={{ width: "72%" }}
                  ></div>
                </div>

              </td>


              <td>
                <span className="riskBadge medium">
                  ● Medium
                </span>
              </td>


              <td>
                <span className="timelineText">
                  18 Days Left
                </span>
              </td>


              <td>
                <span className="statusBadge progressStatus">
                  In Progress
                </span>
              </td>

            </tr>


            {/* Project 2 */}

            <tr>

              <td>
                <div className="projectName">

                  <div className="projectIcon green">
                    H
                  </div>

                  <div>
                    <strong>Highway Expansion</strong>
                    <span>Project HW-118</span>
                  </div>

                </div>
              </td>


              <td>

                <div className="progressInfo">
                  <span>89%</span>
                </div>

                <div className="tableProgress">
                  <div
                    className="tableProgressFill greenProgress"
                    style={{ width: "89%" }}
                  ></div>
                </div>

              </td>


              <td>
                <span className="riskBadge low">
                  ● Low
                </span>
              </td>


              <td>
                <span className="timelineText">
                  8 Days Left
                </span>
              </td>


              <td>
                <span className="statusBadge onTrackStatus">
                  On Track
                </span>
              </td>

            </tr>


            {/* Project 3 */}

            <tr>

              <td>
                <div className="projectName">

                  <div className="projectIcon red">
                    B
                  </div>

                  <div>
                    <strong>Bridge Construction</strong>
                    <span>Project BC-307</span>
                  </div>

                </div>
              </td>


              <td>

                <div className="progressInfo">
                  <span>55%</span>
                </div>

                <div className="tableProgress">
                  <div
                    className="tableProgressFill redProgress"
                    style={{ width: "55%" }}
                  ></div>
                </div>

              </td>


              <td>
                <span className="riskBadge high">
                  ● High
                </span>
              </td>


              <td>
                <span className="timelineText">
                  32 Days Left
                </span>
              </td>


              <td>
                <span className="statusBadge delayedStatus">
                  Delayed
                </span>
              </td>

            </tr>


            {/* Project 4 */}

            <tr>

              <td>
                <div className="projectName">

                  <div className="projectIcon orange">
                    C
                  </div>

                  <div>
                    <strong>Commercial Complex</strong>
                    <span>Project CC-421</span>
                  </div>

                </div>
              </td>


              <td>

                <div className="progressInfo">
                  <span>64%</span>
                </div>

                <div className="tableProgress">
                  <div
                    className="tableProgressFill orangeProgress"
                    style={{ width: "64%" }}
                  ></div>
                </div>

              </td>


              <td>
                <span className="riskBadge medium">
                  ● Medium
                </span>
              </td>


              <td>
                <span className="timelineText">
                  24 Days Left
                </span>
              </td>


              <td>
                <span className="statusBadge progressStatus">
                  In Progress
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>


      {/* Footer */}

      <div className="projectsFooter">

        <span>
          4 Active Projects
        </span>

        <span>
          Last updated from project data
        </span>

      </div>

    </section>
  );
}

export default ProjectsTable;