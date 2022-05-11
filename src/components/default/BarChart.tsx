// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

// Local imports
import { IUserStock } from 'interfaces/stocks/IStocks';
import { IBarChart } from './interfaces/IBarChart';

// styles
import './styles/Charts.scss';

const BarChart = ({ stocks, crypto }: IBarChart) => {

  const labels: string[] = [];
  const entryPrice: number[] = [];
  const marketPrice: number[] = [];

  stocks.forEach((stock: IUserStock): void => {
    labels.push(stock.symbol);
    entryPrice.push(stock.entryValuePerShare);
    marketPrice.push(stock.details.marketValuePerShare);
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