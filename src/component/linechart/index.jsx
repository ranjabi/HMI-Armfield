import React, { useEffect, useRef } from 'react';
// import {Chart} from 'chart.js';
import { Chart, registerables } from 'chart.js';
import "./style.css"
import { ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js'

Chart.register(...registerables);
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
const LineChart = ({ data }) => {

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Inisialisasi chart
    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            // display: false,
            position: 'bottom',
          },           
        }
       }
    });

    return () => {
      // Hapus chart saat komponen dibongkar
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef}/>;
};

export default LineChart;
