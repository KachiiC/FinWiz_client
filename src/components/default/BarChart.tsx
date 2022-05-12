// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

// Local imports
import { IUserStock } from 'interfaces/stocks/IStocks';
import { IGenericChart } from './interfaces/ICharts';

// styles
import './styles/Charts.scss';

const BarChart = ({ stocks }: IGenericChart) => {

  const labels: string[] = [];
  const entryPrice: number[] = [];
  const marketPrice: number[] = [];

  if(stocks){
    stocks.forEach((stock: IUserStock): void => {
      labels.push(stock.symbol);
      entryPrice.push(stock.entryValuePerShare);
      marketPrice.push(stock.details.marketValuePerShare);
    });
  }

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
        display: false,
      },
      legend: {
        display: false        
      }
    },
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          color: 'rgba(235, 235, 235, 0.6)' // changes the color of the axis grid lines
        },
        ticks: {
          color: 'rgb(235, 235, 235)' // changes the color of the axis labels
        },
        title: {
          display: false, // title of axis
          text: 'Asset',
          color: 'rgb(235, 235, 235)',
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
          color: 'rgb(75, 75, 75)'
        },
        ticks: {
          color: 'rgb(235, 235, 235)',
          // maxRotation: 90, // rotate the ticks
          // minRotation: 90
        },
        title: {
          display: true, 
          text: 'Price',
          color: 'rgb(235, 235, 235)',
        },
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