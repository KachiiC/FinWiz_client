// COMPONENTS
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { lineChartX, lineChartY } from './components/LineChartComponents';
// INTERFACES
import { ILineChart } from './ILineChartInterfaces';
// STYLES
import 'sassVariables/charts.scss';

const LineChart = ({ investmentValues }: ILineChart) => {
  Chart.register(...registerables);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: lineChartX,
      y: lineChartY,
    },
  };

  const data = {
    labels: investmentValues.map((data) => new Date(data.dateTime).toLocaleDateString()),
    datasets: [
      {
        label: 'Total',
        data: investmentValues.map((data) => data.value),
        borderColor: 'rgb(84, 182, 227)', // line color
        backgroundColor: 'rgb(255, 255, 255)', // line dot color
      },
    ],
  };

  return (
    <div className='chartWrapper'>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
