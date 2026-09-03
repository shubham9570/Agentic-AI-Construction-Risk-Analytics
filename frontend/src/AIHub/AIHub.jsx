import "./AIHub.css";

import {
  FaHardHat,
  FaCloudSun,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";

function AIHub() {
  const modules = [
    {
      icon: <FaHardHat />,
      title: "Safety AI",
      desc: "Helmet Detection & PPE Monitoring",
      color: "#2563EB",
    },
    {
      icon: <FaCloudSun />,
      title: "Weather AI",
      desc: "Weather Forecast & Alerts",
      color: "#10B981",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Schedule AI",
      desc: "Delay Prediction",
      color: "#F59E0B",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cost AI",
      desc: "Budget Monitoring",
      color: "#EF4444",
    },
    {
      icon: <FaUsers />,
      title: "Resource AI",
      desc: "Workforce Allocation",
      color: "#8B5CF6",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Quality AI",
      desc: "Construction Quality Analysis",
      color: "#14B8A6",
    },
  ];

  return (
    <div className="aihub-page">

      <div className="page-title">
        <h1>🤖 AI Hub</h1>
        <p>Construction Intelligence Agents</p>
      </div>

      <div className="module-grid">

        {modules.map((item, index) => (

          <div className="module-card" key={index}>

            <div
              className="module-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>Open</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIHub;