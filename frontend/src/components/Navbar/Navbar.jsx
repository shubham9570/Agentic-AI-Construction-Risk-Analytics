import { useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="navbar">

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
          >
            <FaBell />
            <span className="notification-count">3</span>
          </button>


          {notificationOpen && (
            <div className="navbar-dropdown notification-dropdown">

              <h3>Notifications</h3>

              <div className="notification">
                <strong>🚨 PPE Violation</strong>
                <p>3 workers detected without helmets at Site A.</p>
                <small>5 min ago</small>
              </div>

              <div className="notification">
                <strong>🌧️ Weather Warning</strong>
                <p>Heavy rainfall expected in Zone B.</p>
                <small>18 min ago</small>
              </div>

              <div className="notification">
                <strong>✅ Zone C Cleared</strong>
                <p>Safety inspection completed successfully.</p>
                <small>1 hr ago</small>
              </div>

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
          >
            <FaUserCircle />
          </button>


          {profileOpen && (
            <div className="navbar-dropdown profile-dropdown">

              <div className="profile-top">

                <FaUserCircle className="large-profile-icon" />

                <div>
                  <h3>Site Administrator</h3>
                  <p>Construction Manager</p>
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

              <button className="logout-button">
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