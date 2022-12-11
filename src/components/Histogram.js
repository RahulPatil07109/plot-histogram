import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
const Histogram = ({ chartData }) => {
  const options = {
    scales: {
      x: {
        grid: {
          offset: false,
        },
        title: {
          display: true,
          text: "Words",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count of Words",
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};

export default Histogram;
