import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import Cards from "../../components/Cards/Cards";
import ProgressChart from "../../components/Charts/ProgressChart";
import RiskGauge from "../../components/RiskGauge/RiskGauge";
import Recommendations from "../../components/Alerts/Recommendations";
import Alerts from "../../components/Alerts/Alerts";
import RiskMonitoring from "../../components/RiskMonitoring/RiskMonitoring";
import Milestones from "../../components/Milestones/Milestones";
import RiskTrend from "../../components/RiskTrend/RiskTrend";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar />


      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div className="dashboard-main">

        {/* NAVBAR */}

        <Navbar />


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="content">


          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="page-header">

            <h1>
              🏗 Construction Intelligence Hub
            </h1>

            <p>
              AI-powered Site Risk Monitoring and Safety Intelligence
              Platform for proactive hazard detection, worker protection,
              and intelligent construction management.
            </p>

          </div>


          {/* =================================================
              KPI CARDS
          ================================================= */}

          <Cards />


          {/* =================================================
              PROJECT PROGRESS + AI RISK
          ================================================= */}

          <div className="dashboard-row progress-risk-row">

            <ProgressChart />

            <RiskGauge />

          </div>


          {/* =================================================
              SITE RISK + MILESTONES
          ================================================= */}

          <div className="dashboard-row risk-milestone-row">

            <RiskMonitoring />

            <Milestones />

          </div>


          {/* =================================================
              RISK TREND + PROJECTS
          ================================================= */}

          <div className="dashboard-row trend-project-row">

            <RiskTrend />

            <ProjectsTable />

          </div>


          {/* =================================================
              AI RECOMMENDATIONS + ALERTS
          ================================================= */}

          <div className="bottom-section">

            <Recommendations />

            <Alerts />

          </div>


        </div>

      </div>
    </>
  );
}

export default Dashboard;