// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(...registerables);

// Local imports
import { IGenericChart } from './interfaces/ICharts';
import { getPieLabelsAndData } from 'helpers/graphHelpers';

// styles
import './styles/Charts.scss';

const PieChart = ({ stocks, crypto, title }: IGenericChart) => {  
  
  const { labels, quantities } = getPieLabelsAndData(stocks!, crypto!);
  
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

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // dont show graph if user not holding asset
  const showChart = quantities.length === 0 ? 
    <p>You are not currently holding any of this asset!</p>
    :
    <Doughnut data={data} options={options}/>;
      

  return (
    <div className="chartWrapper pieWrapper">
      <h2>{title}</h2>
      {showChart}
    </div>
  );
};

export default PieChart;