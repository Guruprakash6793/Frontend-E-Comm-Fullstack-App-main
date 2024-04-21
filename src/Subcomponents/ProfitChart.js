import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProfitChart() {
  const [salesData, setSalesData] = useState([]);

  //   console.log(salesData);
  const date = salesData && salesData.map((sale) => sale.date);

  const profit = salesData && salesData.map((sale) => sale.grossprofit);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const profit = await axios.get(
          "http://localhost:4000/profit/profitchart"
        );
        console.log(profit)
        setSalesData(profit.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDatas();
  }, []);

  const option = {
    responsive: true,
    plugin: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Profit Chart",
      },
    },
  };

  const data = {
    labels: date,
    datasets: [
      {
        label: "Profit of the Day",
        data: profit,
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };
  //   console.log(date, profit);
  return (
    <>
      <div style={{ width: 700, height: 500 }}>
        <Bar options={option} data={data} />
      </div>
    </>
  );
}

export default ProfitChart;
