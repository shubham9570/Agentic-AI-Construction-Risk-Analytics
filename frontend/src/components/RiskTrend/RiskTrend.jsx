import "./RiskTrend.css";

import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { ErrorState, Skeleton } from "../States/States";

const VIEW_W = 700;
const VIEW_H = 250;

function toY(value) {
  const clamped = Math.max(0, Math.min(100, value));
  return VIEW_H - (clamped / 100) * 220;
}

function toX(index, count) {
  if (count <= 1) return VIEW_W / 2;
  return (index / (count - 1)) * VIEW_W;
}

function buildPaths(points) {
  const coords = points.map((p, i) => ({
    x: Math.round(toX(i, points.length) * 10) / 10,
    y: Math.round(toY(p.value) * 10) / 10,
  }));
  const line = coords.map((c) => `${c.x},${c.y}`).join(" ");
  const area =
    coords.map((c) => `L${c.x} ${c.y}`).join(" ") +
    ` L${VIEW_W} ${VIEW_H} L0 ${VIEW_H} Z`;
  const areaPath = area.startsWith("L")
    ? `M${area.slice(1)}`
    : `M0 ${VIEW_H} ${area}`;
  return { line, areaPath, coords };
}

function RiskTrend() {
  const { data, loading, error, retry } = useApi(endpoints.riskTrend(7));

  if (loading) {
    return (
      <section className="riskTrend">
        <div className="riskTrendHeader">
          <div>
            <h2>
              <FaChartLine />
              Risk Trend Analytics
            </h2>
            <p>Weekly analysis of construction site risk levels</p>
          </div>
          <div className="trendStatus">Last 7 Days</div>
        </div>
        <Skeleton lines={4} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="riskTrend">
        <div className="riskTrendHeader">
          <div>
            <h2>
              <FaChartLine />
              Risk Trend Analytics
            </h2>
            <p>Weekly analysis of construction site risk levels</p>
          </div>
          <div className="trendStatus">Last 7 Days</div>
        </div>
        <ErrorState message={error} onRetry={retry} />
      </section>
    );
  }

  const points = Array.isArray(data?.data) ? data.data : [];
  const current = data?.current ?? 0;
  const previous = data?.previous ?? 0;
  const change = data?.change ?? 0;
  const rising = change >= 0;
  const { line, areaPath, coords } = buildPaths(
    points.length ? points : [{ day: "", value: 0 }]
  );

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
          <strong>{current}%</strong>
        </div>

        <div>
          <span>Previous Week</span>
          <strong>{previous}%</strong>
        </div>

        <div className="trendIncrease">
          {rising ? <FaArrowUp /> : <FaArrowDown />}
          <span>Risk Change</span>
          <strong>{rising ? `+${change}%` : `${change}%`}</strong>
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
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
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
              d={areaPath}
              fill="url(#riskGradient)"
            />


            {/* Risk Line */}

            <polyline
              points={line}
              fill="none"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />


            {/* Points */}

            {coords.map((c, i) => (
              <circle key={i} cx={c.x} cy={c.y} r="5" fill="#2563EB" />
            ))}

          </svg>


          {/* X Axis */}

          <div className="xAxis">

            {points.map((p, i) => (
              <span key={i}>{p.day}</span>
            ))}

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
          {rising
            ? "Risk level increased slightly this week"
            : "Risk level decreased this week"}
        </p>

      </div>

    </section>
  );
}

export default RiskTrend;
