import { useCallback, useEffect, useState } from "react";
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

import { SIDEBAR_TOGGLE_EVENT } from "./sidebarBus";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onToggle() {
      setOpen((prev) => !prev);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener(SIDEBAR_TOGGLE_EVENT, onToggle);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(SIDEBAR_TOGGLE_EVENT, onToggle);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {open && (
        <button
          className="sidebarOverlay"
          onClick={close}
          aria-label="Close navigation menu"
        />
      )}
      <aside className={`sidebar${open ? " open" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <h2>BuildAI</h2>

        <p>
          Construction Intelligence Platform
        </p>
      </div>


      {/* Navigation */}
      <ul onClick={close}>

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
    </>
  );
}

export default Sidebar;
