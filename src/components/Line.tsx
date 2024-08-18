import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
 
  
  // Register the components with Chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

interface LineGraphProps {
  data: any;
}

const Lines: React.FC<LineGraphProps> = ({ data }) => {
  if (!data) return <p>Loading...</p>;

    const labels = Object.keys(data.cases);

    const casesData = Object.values(data.cases); // Extract the values (numbers) for cases
    const deathsData = Object.values(data.deaths); // Extract the values (numbers) for deaths
    const recoveredData = Object.values(data.recovered); // Extract the values (numbers) for recoveries

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Cases',
        data: casesData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Deaths',
        data: deathsData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Recoveries',
        data: recoveredData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Lines;
