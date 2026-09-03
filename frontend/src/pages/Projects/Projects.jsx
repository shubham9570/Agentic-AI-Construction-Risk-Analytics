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

import "./Projects.css";

function Projects() {
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
                <strong>08</strong>
                <small>4 active projects</small>
              </div>

            </div>


            <div className="projectSummaryCard">

              <div className="summaryIcon green">
                <FaCheckCircle />
              </div>

              <div>
                <span>On Schedule</span>
                <strong>05</strong>
                <small>62% of projects</small>
              </div>

            </div>


            <div className="projectSummaryCard">

              <div className="summaryIcon orange">
                <FaClock />
              </div>

              <div>
                <span>At Risk</span>
                <strong>02</strong>
                <small>Needs attention</small>
              </div>

            </div>


            <div className="projectSummaryCard">

              <div className="summaryIcon purple">
                <FaTasks />
              </div>

              <div>
                <span>Completed</span>
                <strong>01</strong>
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


            <div className="projectGrid">


              {/* PROJECT 1 */}

              <div className="projectCard">

                <div className="projectTop">

                  <div className="projectIcon">
                    <FaBuilding />
                  </div>

                  <span className="status activeStatus">
                    Active
                  </span>

                </div>


                <h3>
                  Green Valley Tower
                </h3>

                <p className="projectLocation">
                  <FaMapMarkerAlt />
                  Hyderabad, Telangana
                </p>


                <div className="projectDetails">

                  <div>
                    <span>Progress</span>
                    <strong>72%</strong>
                  </div>

                  <div>
                    <span>Budget</span>
                    <strong>₹18.5 Cr</strong>
                  </div>

                </div>


                <div className="projectProgress">

                  <div className="progressBar">
                    <div
                      className="progressFill blue"
                      style={{ width: "72%" }}
                    ></div>
                  </div>

                </div>


                <div className="projectFooter">

                  <span>
                    <FaCalendarAlt />
                    Jun 2026
                  </span>

                  <span>
                    <FaUsers />
                    124 workers
                  </span>

                </div>

              </div>


              {/* PROJECT 2 */}

              <div className="projectCard">

                <div className="projectTop">

                  <div className="projectIcon purpleProject">
                    <FaBuilding />
                  </div>

                  <span className="status warningStatus">
                    At Risk
                  </span>

                </div>


                <h3>
                  Metro Commercial Complex
                </h3>

                <p className="projectLocation">
                  <FaMapMarkerAlt />
                  Bengaluru, Karnataka
                </p>


                <div className="projectDetails">

                  <div>
                    <span>Progress</span>
                    <strong>54%</strong>
                  </div>

                  <div>
                    <span>Budget</span>
                    <strong>₹24.2 Cr</strong>
                  </div>

                </div>


                <div className="projectProgress">

                  <div className="progressBar">
                    <div
                      className="progressFill purple"
                      style={{ width: "54%" }}
                    ></div>
                  </div>

                </div>


                <div className="projectFooter">

                  <span>
                    <FaCalendarAlt />
                    Sep 2026
                  </span>

                  <span>
                    <FaUsers />
                    98 workers
                  </span>

                </div>

              </div>


              {/* PROJECT 3 */}

              <div className="projectCard">

                <div className="projectTop">

                  <div className="projectIcon greenProject">
                    <FaBuilding />
                  </div>

                  <span className="status activeStatus">
                    Active
                  </span>

                </div>


                <h3>
                  Riverside Apartments
                </h3>

                <p className="projectLocation">
                  <FaMapMarkerAlt />
                  Chennai, Tamil Nadu
                </p>


                <div className="projectDetails">

                  <div>
                    <span>Progress</span>
                    <strong>81%</strong>
                  </div>

                  <div>
                    <span>Budget</span>
                    <strong>₹12.8 Cr</strong>
                  </div>

                </div>


                <div className="projectProgress">

                  <div className="progressBar">
                    <div
                      className="progressFill green"
                      style={{ width: "81%" }}
                    ></div>
                  </div>

                </div>


                <div className="projectFooter">

                  <span>
                    <FaCalendarAlt />
                    May 2026
                  </span>

                  <span>
                    <FaUsers />
                    86 workers
                  </span>

                </div>

              </div>


              {/* PROJECT 4 */}

              <div className="projectCard">

                <div className="projectTop">

                  <div className="projectIcon orangeProject">
                    <FaBuilding />
                  </div>

                  <span className="status activeStatus">
                    Active
                  </span>

                </div>


                <h3>
                  Industrial Park Phase II
                </h3>

                <p className="projectLocation">
                  <FaMapMarkerAlt />
                  Pune, Maharashtra
                </p>


                <div className="projectDetails">

                  <div>
                    <span>Progress</span>
                    <strong>43%</strong>
                  </div>

                  <div>
                    <span>Budget</span>
                    <strong>₹31.6 Cr</strong>
                  </div>

                </div>


                <div className="projectProgress">

                  <div className="progressBar">
                    <div
                      className="progressFill orange"
                      style={{ width: "43%" }}
                    ></div>
                  </div>

                </div>


                <div className="projectFooter">

                  <span>
                    <FaCalendarAlt />
                    Dec 2026
                  </span>

                  <span>
                    <FaUsers />
                    152 workers
                  </span>

                </div>

              </div>

            </div>

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
                <strong>63%</strong>
              </div>

              <div className="performanceCard">
                <FaMoneyBillWave />
                <span>Budget Utilization</span>
                <strong>68%</strong>
              </div>

              <div className="performanceCard">
                <FaHardHat />
                <span>Safety Compliance</span>
                <strong>96%</strong>
              </div>

              <div className="performanceCard">
                <FaCalendarAlt />
                <span>Schedule Health</span>
                <strong>78%</strong>
              </div>

            </div>

          </section>

        </div>

      </div>
    </>
  );
}

export default Projects;