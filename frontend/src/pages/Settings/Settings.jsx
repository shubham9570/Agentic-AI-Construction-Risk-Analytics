import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function Settings() {
  return (
    <>
      <Sidebar />

      <div className="dashboard">
        <Navbar />

        <div className="content">
          <h1>⚙ Settings</h1>
          <p>Configure system preferences and user settings.</p>
        </div>
      </div>
    </>
  );
}

export default Settings;