import "./Sidebar.css";

import {
  FaHome,
  FaFolderOpen,
  FaHardHat,
  FaRobot,
  FaShieldAlt,
  FaChartBar
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="logo">
        <h2>BuildAI</h2>

        <p>
          Construction Intelligence Platform
        </p>
      </div>


      {/* Navigation */}
      <ul>

        {/* Dashboard */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            <FaHome className="dashboardIcon" />
            <span>Dashboard</span>
          </NavLink>
        </li>


        {/* Projects */}
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            <FaFolderOpen className="projectsIcon" />
            <span>Projects</span>
          </NavLink>
        </li>


        {/* Safety Agent */}
        <li>
          <NavLink
            to="/safety"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            <FaHardHat className="safetyIcon" />
            <span>Safety Agent</span>
          </NavLink>
        </li>


        {/* AI Hub */}
        <li>
          <NavLink
            to="/aihub"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            <FaRobot className="aiIcon" />
            <span>AI Hub</span>
          </NavLink>
        </li>


        {/* Risk Center */}
        <li>
          <NavLink
            to="/riskcenter"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            <FaShieldAlt className="riskCenterIcon" />
            <span>Risk Center</span>
          </NavLink>
        </li>


        {/* Reports */}
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            <FaChartBar className="reportsIcon" />
            <span>Reports</span>
          </NavLink>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;