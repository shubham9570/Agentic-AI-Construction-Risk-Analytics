import { useEffect, useState } from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import { toggleSidebar } from "../Sidebar/sidebarBus";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { useAuth } from "../../context/AuthContext";

const LEVEL_EMOJI = {
  CRITICAL: "🚨",
  WARNING: "🌧️",
  INFO: "🔔",
  RESOLVED: "✅",
};

function levelEmoji(level) {
  return LEVEL_EMOJI[(level || "").toUpperCase()] || "🔔";
}

function Navbar() {

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();

  const notificationsQuery = useApi(endpoints.notifications, {
    disabled: !notificationOpen,
  });
  const notifications = Array.isArray(notificationsQuery.data)
    ? notificationsQuery.data
    : [];

  useEffect(() => {
    if (!notificationOpen) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setNotificationOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [notificationOpen]);

  const displayName = user?.full_name || "Site Administrator";
  const displayRole = user?.role
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
    : "Construction Manager";

  return (
    <div className="navbar">

      <button
        className="menuButton"
        onClick={toggleSidebar}
        aria-label="Open navigation menu"
        type="button"
      >
        <FaBars />
      </button>

      {/* LEFT SIDE */}
      <div className="navbar-title">
        <h2>Construction Intelligence Command Center</h2>
        <p>Monitor • Predict • Mitigate Risks</p>
      </div>


      {/* RIGHT SIDE */}
      <div className="nav-right">

        {/* BELL */}
        <div className="navbar-menu">

          <button
            className="navbar-button"
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
            }}
            aria-label="Notifications"
            aria-expanded={notificationOpen}
          >
            <FaBell />
            <span className="notification-count">{notifications.length || 3}</span>
          </button>


          {notificationOpen && (
            <div className="navbar-dropdown notification-dropdown">

              <h3>Notifications</h3>

              {notificationsQuery.loading && <p>Loading…</p>}

              {notificationsQuery.error && (
                <p>Couldn&apos;t load notifications.</p>
              )}

              {!notificationsQuery.loading &&
                !notificationsQuery.error &&
                notifications.map((notification, index) => (
                  <div className="notification" key={notification.id ?? index}>
                    <strong>
                      {levelEmoji(notification.level)} {notification.title}
                    </strong>
                    <p>{notification.description}</p>
                    <small>{notification.time_ago}</small>
                  </div>
                ))}

              {!notificationsQuery.loading &&
                !notificationsQuery.error &&
                notifications.length === 0 && (
                  <div className="notification">
                    <p>No new notifications.</p>
                  </div>
                )}

              <button className="view-all-button">
                View All Notifications
              </button>

            </div>
          )}

        </div>


        {/* PROFILE */}
        <div className="navbar-menu">

          <button
            className="navbar-button"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
            }}
            aria-label="Profile"
            aria-expanded={profileOpen}
          >
            <FaUserCircle />
          </button>


          {profileOpen && (
            <div className="navbar-dropdown profile-dropdown">

              <div className="profile-top">

                <FaUserCircle className="large-profile-icon" />

                <div>
                  <h3>{displayName}</h3>
                  <p>{displayRole}</p>
                </div>

              </div>

              <hr />

              <button className="profile-button">
                👤 My Profile
              </button>

              <button className="profile-button">
                ⚙️ Settings
              </button>

              <button className="profile-button">
                🔐 Security
              </button>

              <hr />

              <button className="logout-button" onClick={logout}>
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Navbar;
