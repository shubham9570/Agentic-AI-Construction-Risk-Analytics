import "./ProgressChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

import { endpoints } from "../../api/client";
import { useApi } from "../../api/useApi";
import { ErrorState, Skeleton } from "../States/States";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const FALLBACK = {
  labels: ["Planning", "Foundation", "Structure", "Roofing", "Finishing"],
  values: [100, 92, 76, 51, 28],
};

function ProgressChart() {
  const { data, loading, error, retry } = useApi(endpoints.projectProgress);

  if (loading) {
    return (
      <div className="chart-card">
        <h3>📈 Project Progress</h3>
        <Skeleton lines={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="chart-card">
        <h3>📈 Project Progress</h3>
        <ErrorState message={error} onRetry={retry} />
      </div>
    );
  }

  const phases = data?.phases?.length ? data.phases : FALLBACK.labels.map((phase, i) => ({
    phase,
    value: FALLBACK.values[i],
  }));

  const chartData = {
    labels: phases.map((p) => p.phase),
    datasets: [{
      label: "Completion %",
      data: phases.map((p) => p.value),
      backgroundColor: "#2563EB",
      borderRadius: 8
    }]
  };

  return (

    <div className="chart-card">

      <h3>📈 Project Progress</h3>

      <Bar data={chartData} />

    </div>

  );

}

export default ProgressChart;
