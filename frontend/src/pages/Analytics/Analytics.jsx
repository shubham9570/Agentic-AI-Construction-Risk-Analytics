import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function Analytics() {
  return (
    <>
      <Sidebar />

      <div className="dashboard">
        <Navbar />

        <div className="content">
          <h1>📊 Analytics</h1>
          <p>Construction analytics, KPIs, trends, and AI insights.</p>
        </div>
      </div>
    </>
  );
}

export default Analytics;