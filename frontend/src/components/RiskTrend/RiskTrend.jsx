import "./RiskTrend.css";

import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

function RiskTrend() {
  return (
    <section className="riskTrend">

      {/* Header */}

      <div className="riskTrendHeader">

        <div>
          <h2>
            <FaChartLine />
            Risk Trend Analytics
          </h2>

          <p>
            Weekly analysis of construction site risk levels
          </p>
        </div>

        <div className="trendStatus">
          Last 7 Days
        </div>

      </div>


      {/* Summary */}

      <div className="trendSummary">

        <div>
          <span>Current Risk</span>
          <strong>72%</strong>
        </div>

        <div>
          <span>Previous Week</span>
          <strong>68%</strong>
        </div>

        <div className="trendIncrease">
          <FaArrowUp />
          <span>Risk Change</span>
          <strong>+4%</strong>
        </div>

      </div>


      {/* Chart */}

      <div className="riskChart">

        <div className="yAxis">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>


        <div className="chartArea">

          <div className="gridLine line100"></div>
          <div className="gridLine line80"></div>
          <div className="gridLine line60"></div>
          <div className="gridLine line40"></div>
          <div className="gridLine line20"></div>


          <svg
            className="trendSvg"
            viewBox="0 0 700 250"
            preserveAspectRatio="none"
          >

            <defs>

              <linearGradient
                id="riskGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#2563EB"
                  stopOpacity="0.25"
                />

                <stop
                  offset="100%"
                  stopColor="#2563EB"
                  stopOpacity="0"
                />

              </linearGradient>

            </defs>


            {/* Area */}

            <path
              d="
                M0 135
                L100 115
                L200 130
                L300 90
                L400 105
                L500 75
                L600 95
                L700 70
                L700 250
                L0 250
                Z
              "
              fill="url(#riskGradient)"
            />


            {/* Risk Line */}

            <polyline
              points="
                0,135
                100,115
                200,130
                300,90
                400,105
                500,75
                600,95
                700,70
              "
              fill="none"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />


            {/* Points */}

            <circle cx="0" cy="135" r="5" fill="#2563EB" />
            <circle cx="100" cy="115" r="5" fill="#2563EB" />
            <circle cx="200" cy="130" r="5" fill="#2563EB" />
            <circle cx="300" cy="90" r="5" fill="#2563EB" />
            <circle cx="400" cy="105" r="5" fill="#2563EB" />
            <circle cx="500" cy="75" r="5" fill="#2563EB" />
            <circle cx="600" cy="95" r="5" fill="#2563EB" />
            <circle cx="700" cy="70" r="5" fill="#2563EB" />

          </svg>


          {/* X Axis */}

          <div className="xAxis">

            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>

          </div>

        </div>

      </div>


      {/* Footer */}

      <div className="trendFooter">

        <div>
          <span className="legendDot"></span>
          Overall Site Risk
        </div>

        <p>
          Risk level increased slightly this week
        </p>

      </div>

    </section>
  );
}

export default RiskTrend;