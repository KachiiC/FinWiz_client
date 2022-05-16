// COMPONENTS
import { Bar } from 'react-chartjs-2';
import { barChartPlugin, barChartX, barChartY } from './components/BarChartComponents';
import { Chart, registerables } from 'chart.js';
// HELPERS
import { getBarLabelsAndData } from 'helpers/graphHelpers';
// INTERFACES
import { IGenericChart } from './BarChartInterfaces';
// STYLES
import 'sassVariables/charts.scss';

const BarChart = ({ stocks, crypto }: IGenericChart) => {
  
  Chart.register(...registerables);

  const { labels, entryPrice, marketPrice } = getBarLabelsAndData(stocks!, crypto!);

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
    responsive: true,
    plugins: barChartPlugin,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: barChartX,
      y: barChartY,
    },
  };

  return (
    <div className='chartWrapper'>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default BarChart;
