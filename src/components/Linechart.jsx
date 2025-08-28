// src/components/TotalDistributions.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const data = {
  labels: [" ", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Distributions",
      data: [300, 280, 220, 180, 250, 200, 230, 240],
      fill: true,
      borderColor: "transparent",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#4800F4"); // purple
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.16)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        return gradient;
      },
      tension: 0.6, // smooth curve
      pointBackgroundColor: "none",
      pointBorderColor: "none",
      pointBorderWidth: 0,
      pointRadius: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "none",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#8b5cf6",
      titleColor: "#fff",
      bodyColor: "#fff",
      displayColors: false,
      callbacks: {
        label: (context) => `$${context.raw}`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#fff" },
    },
    y: {
      grid: { display: false },
      min: 0,
      max: 300,
      ticks: {
        stepSize: 100,
        color: "#fff",
      },
    },
  },
};

export default function LineCharts() {
  return (
    <div className="bg-transparent  p-6  w-full max-w-3xl">
      <h2 className="text-white font-semibold text-lg mb-4">
        Total Distributions
      </h2>
      <Line data={data} options={options} height={75} />
    </div>
  );
}
