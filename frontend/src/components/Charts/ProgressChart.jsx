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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function ProgressChart() {

  const data = {

    labels: [
      "Planning",
      "Foundation",
      "Structure",
      "Roofing",
      "Finishing"
    ],

    datasets: [{

      label: "Completion %",

      data: [100, 92, 76, 51, 28],

      backgroundColor: "#2563EB",

      borderRadius: 8

    }]

  };

  return (

    <div className="chart-card">

      <h3>📈 Project Progress</h3>

      <Bar data={data} />

    </div>

  );

}

export default ProgressChart;