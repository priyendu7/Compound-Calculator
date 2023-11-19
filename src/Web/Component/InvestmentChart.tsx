import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface Props {
  finalAmounts: number[];
  investedAmounts: number[];
}

const InvestmentChart: React.FC<Props> = ({
  finalAmounts,
  investedAmounts,
}) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Clear existing chart instance
        }
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: finalAmounts.map((_, index) => index.toString()),
            datasets: [
              {
                label: "Invested Amount",
                data: investedAmounts,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.3)",
                borderWidth: 2,
                fill: true,
              },
              {
                label: "Final Amount",
                data: finalAmounts,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.3)",
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Years",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Amount",
                },
              },
            },
          },
        });
      }
    }
  }, [finalAmounts, investedAmounts]);

  return (
    <div className="container mt-5">
      <h2>Investment Chart</h2>
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default InvestmentChart;
