// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

// local imports
import { User } from 'mockData/user';

// styles
import './styles/Charts.scss';

const BarChart = () => {
  console.log(User.investments);

  const labels: string[] = [];

  const entryPrice: number[] = [];
  const marketPrice: number[] = [];

  User.investments.stock.stocksList.forEach(stock => {
    labels.push(stock.name);
    entryPrice.push(stock.entryValuePerShare);
    marketPrice.push(stock.markeValuePerShare);
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Entry Price',
        data: entryPrice,
        backgroundColor: 'rgb(10, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Market Price',
        data: marketPrice,
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Top 5 Entry vs. Market Price',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="chartWrapper">
      <Bar options={options} data={data} />;
    </div>
  );
};

export default BarChart;