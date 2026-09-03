import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Safety.css";

/* =========================================================
   SAFETY PAGE DATA
========================================================= */

const safetyData = {
  overview: {
    title: "Safety Intelligence Agent",
    subtitle:
      "AI-powered worker protection, hazard detection and real-time construction safety monitoring.",
  },

  ppe: {
    title: "PPE Detection",
    subtitle:
      "AI-powered detection of helmets, safety vests and protective equipment.",
  },

  hazards: {
    title: "Hazard Detection",
    subtitle:
      "Detect unsafe areas, hazardous activities and potential construction risks.",
  },

  workers: {
    title: "Worker Monitoring",
    subtitle:
      "Monitor worker activity, restricted zones and site safety compliance.",
  },

  cameras: {
    title: "Camera Monitoring",
    subtitle:
      "Monitor connected construction cameras and real-time site activity.",
  },

  alerts: {
    title: "Live Safety Alerts",
    subtitle:
      "View the latest safety incidents detected by the AI safety agent.",
  },
};


/* =========================================================
   LIVE CAMERA
========================================================= */

function LiveCamera() {
  const videoRef = useRef(null);

  const [cameraError, setCameraError] = useState("");
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        if (
          !navigator.mediaDevices ||
          !navigator.mediaDevices.getUserMedia
        ) {
          setCameraError(
            "Camera access is not supported by this browser."
          );
          return;
        }

        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        }
      } catch (error) {
        console.error("Camera error:", error);

        setCameraError(
          "Camera permission denied or camera is unavailable. Please allow camera access."
        );
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div className="live-camera">

      {cameraError ? (
        <div className="camera-error">
          <div>
            <h3>⚠️ Camera Unavailable</h3>

            <p>{cameraError}</p>

            <small>
              Check your browser camera permission and try again.
            </small>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-video"
          />

          <div className="camera-live-badge">
            ● {cameraActive ? "LIVE" : "CONNECTING"}
          </div>

          <div className="camera-overlay-title">
            CAM-01 - Zone A
          </div>

          {/* Temporary detection display.
              This is still dummy AI information.
              Real AI detection will be connected later. */}

          <div className="camera-ai-status">
            <span className="ai-status-dot"></span>
            AI Monitoring Ready
          </div>
        </>
      )}

    </div>
  );
}


/* =========================================================
   MAIN SAFETY AGENT
========================================================= */

function SafetyAgent() {

  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      icon: "🏠",
      label: "Overview",
    },
    {
      id: "ppe",
      icon: "🦺",
      label: "PPE Detection",
    },
    {
      id: "hazards",
      icon: "⚠️",
      label: "Hazard Detection",
    },
    {
      id: "workers",
      icon: "👷",
      label: "Worker Monitoring",
    },
    {
      id: "cameras",
      icon: "📹",
      label: "Camera Monitoring",
    },
    {
      id: "alerts",
      icon: "🚨",
      label: "Live Alerts",
    },
  ];

  return (
    <div className="safety-page">

      {/* SIDEBAR */}

      <Sidebar />


      {/* MAIN CONTENT */}

      <div className="safety-main-content">

        {/* HEADER */}

        <div className="safety-header">

          <div className="header-left">

            <div className="header-icon">
              🛡️
            </div>

            <div>

              <h1>
                {safetyData[activeTab].title}
              </h1>

              <p>
                {safetyData[activeTab].subtitle}
              </p>

            </div>

          </div>


          <div className="agent-status">

            <span className="status-dot"></span>

            AI Agent Online

          </div>

        </div>


        {/* SECONDARY NAVIGATION */}

        <div className="safety-tabs">

          {tabs.map((tab) => (

            <button
              key={tab.id}
              className={`safety-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >

              <span className="tab-icon">
                {tab.icon}
              </span>

              <span>
                {tab.label}
              </span>

            </button>

          ))}

        </div>


        {/* PAGE CONTENT */}

        {activeTab === "overview" && (
          <Overview />
        )}

        {activeTab === "ppe" && (
          <PPEDetection />
        )}

        {activeTab === "hazards" && (
          <HazardDetection />
        )}

        {activeTab === "workers" && (
          <WorkerMonitoring />
        )}

        {activeTab === "cameras" && (
          <CameraMonitoring />
        )}

        {activeTab === "alerts" && (
          <LiveAlerts />
        )}

      </div>

    </div>
  );
}


/* =========================================================
   OVERVIEW
========================================================= */

function Overview() {

  return (
    <>

      {/* KPI CARDS */}

      <div className="stats-grid">

        <div className="stat-card green">

          <div className="stat-icon">
            🛡️
          </div>

          <div>

            <p>Safety Compliance</p>

            <h2>96%</h2>

            <span className="positive">
              ↑ 3.2% this week
            </span>

          </div>

        </div>


        <div className="stat-card red">

          <div className="stat-icon">
            ⚠️
          </div>

          <div>

            <p>Active Hazards</p>

            <h2>14</h2>

            <span className="danger">
              4 high priority
            </span>

          </div>

        </div>


        <div className="stat-card blue">

          <div className="stat-icon">
            📹
          </div>

          <div>

            <p>AI Cameras</p>

            <h2>32</h2>

            <span className="positive">
              All online
            </span>

          </div>

        </div>


        <div className="stat-card purple">

          <div className="stat-icon">
            👷
          </div>

          <div>

            <p>Workers Monitored</p>

            <h2>486</h2>

            <span className="positive">
              Live monitoring
            </span>

          </div>

        </div>

      </div>


      {/* LIVE MONITORING */}

      <div className="content-card">

        <div className="section-header">

          <div>

            <h2>
              📹 Live AI Safety Monitoring
            </h2>

            <p>
              Computer vision models continuously analyze construction
              site activity.
            </p>

          </div>

          <span className="live-badge">
            ● LIVE MONITORING
          </span>

        </div>


        <div className="monitor-layout">

          {/* REAL CAMERA */}

          <div className="camera-screen">

            <LiveCamera />


            <div className="camera-bottom">

              <div>

                <strong>
                  18
                </strong>

                <span>
                  Workers
                </span>

              </div>


              <div>

                <strong>
                  98%
                </strong>

                <span>
                  AI Confidence
                </span>

              </div>


              <div>

                <strong>
                  SAFE
                </strong>

                <span>
                  Current Status
                </span>

              </div>

            </div>

          </div>


          {/* CAMERA LIST */}

          <div className="camera-list">

            <CameraItem
              name="CAM-01"
              zone="Zone A"
              workers="18 workers"
              type="PPE Monitoring"
              active
            />

            <CameraItem
              name="CAM-02"
              zone="Zone B"
              workers="24 workers"
              type="Hazard Monitoring"
            />

            <CameraItem
              name="CAM-03"
              zone="Zone C"
              workers="12 workers"
              type="Worker Monitoring"
            />

          </div>

        </div>

      </div>


      {/* AI DETECTION MODULES */}

      <div className="content-card">

        <div className="section-header">

          <div>

            <h2>
              🤖 AI Safety Detection
            </h2>

            <p>
              Intelligent detection systems running across the
              construction site.
            </p>

          </div>

        </div>


        <div className="detection-grid">

          <DetectionCard
            icon="🦺"
            title="PPE Detection"
            description="Helmets, safety vests and protective equipment"
            value="96%"
            label="Compliance"
            color="green"
          />

          <DetectionCard
            icon="⚠️"
            title="Hazard Detection"
            description="Detect unsafe areas and hazardous activities"
            value="14"
            label="Active Hazards"
            color="red"
          />

          <DetectionCard
            icon="👷"
            title="Worker Monitoring"
            description="Track worker activity and restricted zones"
            value="486"
            label="Workers"
            color="blue"
          />

          <DetectionCard
            icon="📹"
            title="Camera Monitoring"
            description="Real-time CCTV and site camera analysis"
            value="32"
            label="Cameras Online"
            color="purple"
          />

        </div>

      </div>


      {/* ALERTS */}

      <div className="two-column">

        <Alerts />

        <Recommendation />

      </div>


      {/* SYSTEM STATUS */}

      <SystemStatus />

    </>
  );
}


/* =========================================================
   PPE DETECTION
========================================================= */

function PPEDetection() {

  return (

    <div className="detail-page">

      <div className="detail-hero green-bg">

        <div className="large-icon">
          🦺
        </div>

        <div>

          <h2>
            PPE Detection System
          </h2>

          <p>
            AI computer vision continuously checks workers for
            required protective equipment.
          </p>

        </div>

        <div className="active-status">
          ● AI ACTIVE
        </div>

      </div>


      <div className="stats-grid">

        <SimpleStat
          title="PPE Compliance"
          value="96%"
          text="Excellent"
          color="green"
        />

        <SimpleStat
          title="Workers Checked"
          value="486"
          text="Today"
          color="blue"
        />

        <SimpleStat
          title="Violations"
          value="08"
          text="Detected"
          color="red"
        />

        <SimpleStat
          title="AI Confidence"
          value="98%"
          text="Detection accuracy"
          color="purple"
        />

      </div>


      <div className="content-card">

        <h2>
          🦺 PPE Monitoring Results
        </h2>

        <div className="progress-list">

          <Progress
            title="Helmet Detection"
            value="98%"
            percent="98"
            color="green"
          />

          <Progress
            title="Safety Vest Detection"
            value="95%"
            percent="95"
            color="blue"
          />

          <Progress
            title="Safety Shoes"
            value="94%"
            percent="94"
            color="purple"
          />

          <Progress
            title="Protective Equipment"
            value="92%"
            percent="92"
            color="orange"
          />

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   HAZARD DETECTION
========================================================= */

function HazardDetection() {

  const hazards = [
    ["PPE Violation", "Zone B", "5 min ago", "Critical"],
    ["Unsafe Equipment", "Zone A", "18 min ago", "High"],
    ["Wet Surface", "Zone C", "32 min ago", "Medium"],
    ["Electrical Hazard", "Basement", "45 min ago", "High"],
  ];

  return (

    <div className="detail-page">

      <div className="detail-hero red-bg">

        <div className="large-icon">
          ⚠️
        </div>

        <div>

          <h2>
            AI Hazard Detection
          </h2>

          <p>
            Identify unsafe conditions and hazardous construction
            activities in real time.
          </p>

        </div>

        <div className="active-status red-status">
          ● 14 ACTIVE
        </div>

      </div>


      <div className="hazard-summary">

        <div>
          <span>Critical</span>
          <strong>3</strong>
        </div>

        <div>
          <span>High</span>
          <strong>5</strong>
        </div>

        <div>
          <span>Medium</span>
          <strong>6</strong>
        </div>

      </div>


      <div className="content-card">

        <div className="section-header">

          <div>

            <h2>
              🚨 Active Hazards
            </h2>

            <p>
              Hazards identified by AI-powered monitoring.
            </p>

          </div>

          <span className="danger-count">
            14 Active
          </span>

        </div>


        <div className="hazard-table">

          <div className="table-head">

            <span>Hazard</span>
            <span>Location</span>
            <span>Detected</span>
            <span>Severity</span>

          </div>


          {hazards.map((hazard, index) => (

            <div
              className="table-row"
              key={index}
            >

              <span>
                <strong>{hazard[0]}</strong>
              </span>

              <span>
                {hazard[1]}
              </span>

              <span>
                {hazard[2]}
              </span>

              <span>

                <b
                  className={`severity ${hazard[3].toLowerCase()}`}
                >
                  {hazard[3]}
                </b>

              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   WORKER MONITORING
========================================================= */

function WorkerMonitoring() {

  return (

    <div className="detail-page">

      <div className="detail-hero blue-bg">

        <div className="large-icon">
          👷
        </div>

        <div>

          <h2>
            Worker Monitoring
          </h2>

          <p>
            AI-powered worker tracking and restricted-zone monitoring.
          </p>

        </div>

        <div className="active-status">
          ● LIVE
        </div>

      </div>


      <div className="stats-grid">

        <SimpleStat
          title="Workers Monitored"
          value="486"
          text="Live"
          color="blue"
        />

        <SimpleStat
          title="Active Zones"
          value="32"
          text="Monitored"
          color="purple"
        />

        <SimpleStat
          title="Restricted Entries"
          value="04"
          text="Today"
          color="red"
        />

        <SimpleStat
          title="Worker Safety"
          value="96%"
          text="Compliance"
          color="green"
        />

      </div>


      <div className="content-card">

        <h2>
          👷 Worker Monitoring Status
        </h2>

        <div className="worker-list">

          <Worker
            name="Zone A Workers"
            count="128"
            status="Safe"
          />

          <Worker
            name="Zone B Workers"
            count="164"
            status="Attention"
          />

          <Worker
            name="Zone C Workers"
            count="112"
            status="Safe"
          />

          <Worker
            name="Basement Workers"
            count="82"
            status="Safe"
          />

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   CAMERA MONITORING
========================================================= */

function CameraMonitoring() {
  return (
    <div className="detail-page">

      {/* HEADER */}
      <div className="detail-hero purple-bg">

        <div className="large-icon">📹</div>

        <div>
          <h2>Camera Monitoring</h2>

          <p>
            Real-time CCTV monitoring and AI-powered site analysis.
          </p>
        </div>

        <div className="active-status">
          ● 32 ONLINE
        </div>

      </div>


      {/* CAMERA GRID */}
      <div className="camera-dashboard">

        {/* CAM-01 REAL WEBCAM */}
        <RealCameraPanel
          name="CAM-01"
          zone="Zone A"
          workers="18 Workers"
          status="PPE Monitoring"
        />


        {/* CAM-02 */}
        <CameraPanel
          name="CAM-02"
          zone="Zone B"
          workers="24 Workers"
          status="Hazard Monitoring"
        />


        {/* CAM-03 */}
        <CameraPanel
          name="CAM-03"
          zone="Zone C"
          workers="12 Workers"
          status="Worker Monitoring"
        />


        {/* CAM-04 */}
        <CameraPanel
          name="CAM-04"
          zone="Basement"
          workers="08 Workers"
          status="Equipment Monitoring"
        />

      </div>

    </div>
  );
}
/* =========================================================
   LIVE ALERTS
========================================================= */

function LiveAlerts() {

  return (

    <div className="detail-page">

      <div className="detail-hero orange-bg">

        <div className="large-icon">
          🚨
        </div>

        <div>

          <h2>
            Live Safety Alerts
          </h2>

          <p>
            Latest hazards and safety incidents detected by the AI
            safety agent.
          </p>

        </div>

        <div className="active-status red-status">
          ● 4 ACTIVE
        </div>

      </div>


      <div className="content-card">

        <div className="alert-full">

          <AlertRow
            icon="⚠️"
            title="PPE Violation Detected"
            description="Worker without helmet detected in Zone A"
            time="2 min ago"
            level="HIGH"
          />

          <AlertRow
            icon="🔔"
            title="Restricted Zone Entry"
            description="Worker entered restricted excavation area"
            time="8 min ago"
            level="MEDIUM"
          />

          <AlertRow
            icon="✓"
            title="Safety Check Completed"
            description="Zone C safety inspection completed successfully"
            time="22 min ago"
            level="RESOLVED"
          />

          <AlertRow
            icon="⚡"
            title="Electrical Hazard"
            description="Unsafe wiring detected in basement"
            time="45 min ago"
            level="HIGH"
          />

        </div>

      </div>


      <Recommendation />

    </div>
  );
}


/* =========================================================
   CAMERA ITEM
========================================================= */

function CameraItem({
  name,
  zone,
  workers,
  type,
  active,
}) {

  return (

    <div
      className={`camera-item ${
        active ? "selected" : ""
      }`}
    >

      <div>

        <strong>
          📹 {name}
        </strong>

        <p>
          {zone} · {workers}
        </p>

        <small>
          {type}
        </small>

      </div>

      <span className="online">
        ● LIVE
      </span>

    </div>
  );
}


/* =========================================================
   DETECTION CARD
========================================================= */

function DetectionCard({
  icon,
  title,
  description,
  value,
  label,
  color,
}) {

  return (

    <div className={`detection-card ${color}`}>

      <div className="detection-top">

        <div className="detection-icon">
          {icon}
        </div>

        <span className="ai-active">
          AI ACTIVE
        </span>

      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <div className="detection-value">
        {value}
      </div>

      <span className="detection-label">
        {label}
      </span>

    </div>
  );
}


/* =========================================================
   ALERTS
========================================================= */

function Alerts() {

  return (

    <div className="content-card">

      <div className="section-header">

        <div>

          <h2>
            🔔 Live Safety Alerts
          </h2>

          <p>
            Latest hazards detected by the AI safety agent.
          </p>

        </div>

        <button className="link-button">
          View All →
        </button>

      </div>


      <AlertRow
        icon="⚠️"
        title="PPE Violation Detected"
        description="Worker without helmet detected in Zone A"
        time="2 min ago"
        level="HIGH"
      />

      <AlertRow
        icon="🔔"
        title="Restricted Zone Entry"
        description="Worker entered restricted excavation area"
        time="8 min ago"
        level="MEDIUM"
      />

      <AlertRow
        icon="✓"
        title="Safety Check Completed"
        description="Zone C safety inspection completed successfully"
        time="22 min ago"
        level="RESOLVED"
      />

    </div>
  );
}


/* =========================================================
   ALERT ROW
========================================================= */

function AlertRow({
  icon,
  title,
  description,
  time,
  level,
}) {

  return (

    <div className="alert-row">

      <div className="alert-icon">
        {icon}
      </div>

      <div className="alert-content">

        <strong>
          {title}
        </strong>

        <p>
          {description}
        </p>

      </div>

      <span className="alert-time">
        {time}
      </span>

      <span
        className={`alert-level ${level.toLowerCase()}`}
      >
        {level}
      </span>

    </div>
  );
}


/* =========================================================
   RECOMMENDATION
========================================================= */

function Recommendation() {

  return (

    <div className="recommendation">

      <div className="recommendation-icon">
        🤖
      </div>

      <h2>
        AI Safety Recommendation
      </h2>

      <p>
        Based on current site conditions and detected safety patterns,
        the AI agent recommends immediate preventive actions.
      </p>


      <div className="recommendation-list">

        <div>
          🦺 Increase PPE inspections in Zone A
        </div>

        <div>
          🚧 Restrict access to excavation area
        </div>

        <div>
          📹 Increase camera monitoring frequency
        </div>

      </div>


      <button className="action-button">
        Take Action
      </button>

    </div>
  );
}


/* =========================================================
   SYSTEM STATUS
========================================================= */

function SystemStatus() {

  return (

    <div className="system-status">

      <div className="system-left">

        <div className="system-icon">
          ✓
        </div>

        <div>

          <strong>
            AI Safety System Status
          </strong>

          <p>
            All connected safety monitoring systems are operating normally.
          </p>

        </div>

      </div>


      <div className="system-metrics">

        <div>
          <strong>24/7</strong>
          <span>Monitoring</span>
        </div>

        <div>
          <strong>32</strong>
          <span>Cameras</span>
        </div>

        <div>
          <strong>486</strong>
          <span>Workers</span>
        </div>

        <div>
          <strong>98%</strong>
          <span>System Health</span>
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SIMPLE STAT
========================================================= */

function SimpleStat({
  title,
  value,
  text,
  color,
}) {

  return (

    <div className={`stat-card ${color}`}>

      <div className="stat-icon">
        📊
      </div>

      <div>

        <p>
          {title}
        </p>

        <h2>
          {value}
        </h2>

        <span>
          {text}
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   PROGRESS
========================================================= */

function Progress({
  title,
  value,
  percent,
  color,
}) {

  return (

    <div className="progress-item">

      <div className="progress-title">

        <strong>
          {title}
        </strong>

        <span>
          {value}
        </span>

      </div>


      <div className="progress-track">

        <div
          className={`progress-fill ${color}`}
          style={{
            width: `${percent}%`,
          }}
        ></div>

      </div>

    </div>
  );
}


/* =========================================================
   WORKER
========================================================= */

function Worker({
  name,
  count,
  status,
}) {

  return (

    <div className="worker-item">

      <div className="worker-icon">
        👷
      </div>

      <div>

        <strong>
          {name}
        </strong>

        <p>
          {count} workers currently monitored
        </p>

      </div>

      <span
        className={
          status === "Safe"
            ? "worker-safe"
            : "worker-attention"
        }
      >
        {status}
      </span>

    </div>
  );
}


/* =========================================================
   CAMERA PANEL
========================================================= */
function RealCameraPanel({
  name,
  zone,
  workers,
  status,
}) {

  const [cameraOn, setCameraOn] = React.useState(false);
  const [error, setError] = React.useState("");

  const videoRef = React.useRef(null);
  const streamRef = React.useRef(null);


  const startCamera = async () => {

    try {

      setError("");

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);

    } catch (err) {

      console.error(err);

      setError(
        "Camera permission denied or camera is unavailable."
      );

    }

  };


  const stopCamera = () => {

    if (streamRef.current) {

      streamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      streamRef.current = null;

    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOn(false);

  };


  React.useEffect(() => {

    return () => {

      if (streamRef.current) {

        streamRef.current
          .getTracks()
          .forEach((track) => track.stop());

      }

    };

  }, []);


  return (

    <div className="camera-panel real-camera-panel">

      {/* VIDEO AREA */}

      <div className="camera-preview real-preview">

        {/* CAMERA TITLE */}

        <div className="real-camera-title">

          <span>
            📹 {name}
          </span>

          <span
            className={
              cameraOn
                ? "real-live active"
                : "real-live"
            }
          >
            ● {cameraOn ? "LIVE" : "OFFLINE"}
          </span>

        </div>


        {/* VIDEO */}

        {cameraOn ? (

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="webcam-video"
          />

        ) : (

          <div className="camera-placeholder">

            <div className="camera-placeholder-icon">
              📹
            </div>

            <h3>Camera Not Connected</h3>

            <p>
              Start the webcam to begin live monitoring
            </p>

            <button
              className="start-camera-btn"
              onClick={startCamera}
            >
              🎥 Start Webcam
            </button>

          </div>

        )}


        {/* AI OVERLAY */}

        {cameraOn && (

          <>

            <div className="ai-scan-line"></div>

            <div className="ai-status-box">
              🤖 AI Monitoring Active
            </div>

            <div className="ppe-status-box">
              🦺 PPE Analysis Ready
            </div>

          </>

        )}

      </div>


      {/* CAMERA INFORMATION */}

      <div className="camera-info">

        <div className="camera-info-header">

          <div>

            <h3>{name}</h3>

            <p>
              {zone} · {workers}
            </p>

            <small>
              {status}
            </small>

          </div>


          <div>

            {cameraOn ? (

              <button
                className="stop-camera-btn"
                onClick={stopCamera}
              >
                Stop Camera
              </button>

            ) : (

              <button
                className="connect-camera-btn"
                onClick={startCamera}
              >
                Connect
              </button>

            )}

          </div>

        </div>


        {error && (

          <div className="camera-error">
            ⚠️ {error}
          </div>

        )}

      </div>

    </div>

  );
}
function CameraPanel({
  name,
  zone,
  workers,
  status,
}) {

  return (

    <div className="camera-panel">

      <div className="camera-preview">

        <span>
          📹 {name}
        </span>

        <b>
          ● LIVE
        </b>

        <div className="preview-person">
          👷
        </div>

      </div>


      <div className="camera-info">

        <h3>
          {name}
        </h3>

        <p>
          {zone} · {workers}
        </p>

        <small>
          {status}
        </small>

      </div>

    </div>
  );
}


export default SafetyAgent;