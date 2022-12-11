import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
const Histogram = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default Histogram;
