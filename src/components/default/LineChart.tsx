// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

// local imports
import { User } from 'mockData/user';
console.log(User);
// styles


const LineChart = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Portfolio Over Time',
      },
    },
  };

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <h1>line chart</h1>
  );
};

export default LineChart;