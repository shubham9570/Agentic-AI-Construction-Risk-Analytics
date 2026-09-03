import "./SafetyIntelligence.css";

import {
  FaHardHat,
  FaShieldAlt,
  FaBolt,
  FaCloudRain,
  FaTools,
  FaUserShield,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

function SafetyIntelligence() {
  return (
    <section className="safetyIntelligence">

      {/* =========================
          HEADER
      ========================= */}

      <div className="safetyHeader">

        <div>
          <h2>
            <FaShieldAlt />
            Safety Intelligence & Hazard Protection
          </h2>

          <p>
            AI-powered safety monitoring and proactive hazard protection
          </p>
        </div>

        <div className="protectionStatus">
          <FaCheckCircle />
          Protection Active
        </div>

      </div>


      {/* =========================
          SAFETY GRID
      ========================= */}

      <div className="safetyGrid">


        {/* PPE COMPLIANCE */}

        <div className="safetyCard">

          <div className="safetyIcon ppe">
            <FaHardHat />
          </div>

          <div className="safetyCardContent">

            <h3>PPE Compliance</h3>

            <p>
              Worker protective equipment
            </p>

            <div className="safetyProgress">

              <div className="progressTrack">
                <div
                  className="progressFill greenFill"
                  style={{ width: "96%" }}
                ></div>
              </div>

              <strong>96%</strong>

            </div>

            <span className="safeLabel">
              Excellent
            </span>

          </div>

        </div>


        {/* SAFETY BARRIERS */}

        <div className="safetyCard">

          <div className="safetyIcon barrier">
            <FaShieldAlt />
          </div>

          <div className="safetyCardContent">

            <h3>Safety Barriers</h3>

            <p>
              Site protection barriers
            </p>

            <div className="safetyProgress">

              <div className="progressTrack">
                <div
                  className="progressFill blueFill"
                  style={{ width: "88%" }}
                ></div>
              </div>

              <strong>88%</strong>

            </div>

            <span className="safeLabel">
              Good
            </span>

          </div>

        </div>


        {/* ELECTRICAL SAFETY */}

        <div className="safetyCard">

          <div className="safetyIcon electrical">
            <FaBolt />
          </div>

          <div className="safetyCardContent">

            <h3>Electrical Safety</h3>

            <p>
              Electrical systems monitoring
            </p>

            <div className="safetyProgress">

              <div className="progressTrack">
                <div
                  className="progressFill orangeFill"
                  style={{ width: "74%" }}
                ></div>
              </div>

              <strong>74%</strong>

            </div>

            <span className="warningLabel">
              Needs Attention
            </span>

          </div>

        </div>


        {/* WEATHER PROTECTION */}

        <div className="safetyCard">

          <div className="safetyIcon weather">
            <FaCloudRain />
          </div>

          <div className="safetyCardContent">

            <h3>Weather Risk</h3>

            <p>
              Environmental hazard monitoring
            </p>

            <div className="safetyProgress">

              <div className="progressTrack">
                <div
                  className="progressFill orangeFill"
                  style={{ width: "68%" }}
                ></div>
              </div>

              <strong>68%</strong>

            </div>

            <span className="warningLabel">
              Weather Alert
            </span>

          </div>

        </div>


        {/* EQUIPMENT SAFETY */}

        <div className="safetyCard">

          <div className="safetyIcon equipment">
            <FaTools />
          </div>

          <div className="safetyCardContent">

            <h3>Equipment Safety</h3>

            <p>
              Machinery and equipment status
            </p>

            <div className="safetyProgress">

              <div className="progressTrack">
                <div
                  className="progressFill greenFill"
                  style={{ width: "91%" }}
                ></div>
              </div>

              <strong>91%</strong>

            </div>

            <span className="safeLabel">
              Operating Normally
            </span>

          </div>

        </div>


        {/* WORKER SAFETY */}

        <div className="safetyCard">

          <div className="safetyIcon worker">
            <FaUserShield />
          </div>

          <div className="safetyCardContent">

            <h3>Worker Safety</h3>

            <p>
              Worker activity and protection
            </p>

            <div className="safetyProgress">

              <div className="progressTrack">
                <div
                  className="progressFill greenFill"
                  style={{ width: "94%" }}
                ></div>
              </div>

              <strong>94%</strong>

            </div>

            <span className="safeLabel">
              Protected
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          AI SAFETY INSIGHT
      ========================= */}

      <div className="safetyInsight">

        <div className="insightIcon">
          <FaExclamationTriangle />
        </div>

        <div className="insightContent">

          <strong>
            AI Safety Insight
          </strong>

          <p>
            Electrical safety and weather conditions require
            additional monitoring. AI recommends increasing
            inspections in affected zones.
          </p>

        </div>

        <button>
          Review Hazards
        </button>

      </div>

    </section>
  );
}

export default SafetyIntelligence;