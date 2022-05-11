// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(...registerables);

// Local imports
import { IGenericChart } from './interfaces/ICharts';
import { IUserStock } from 'interfaces/stocks/IStocks';

// styles
import './styles/Charts.scss';

const PieChart = ({ stocks }: IGenericChart) => {  
  const labels: string[] = [];
  const quantities: number[] = [];

  stocks.forEach((stock: IUserStock): void => {
    labels.push(stock.symbol);
    quantities.push(stock.totalValueOfShares);
  });

  // todo - make this up of stocks and crypto
  // crypto.forEach(crypto => {
  //   labels.push(crypto.name);
  //   quantities.push(crypto.totalCryptoValue);
  // });
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Makeup of Portfolio',
        data: quantities,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chartWrapper pieWrapper">
      <Doughnut data={data}/>
    </div>
  );
};

export default PieChart;