import React, { useEffect, useRef } from "react";
// import {Chart} from 'chart.js';
import { Chart, registerables } from "chart.js";
import "./style.css";
import {
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

Chart.register(...registerables);
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
