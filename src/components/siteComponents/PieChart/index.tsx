// COMPONENTS
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { pieChartBackgroundColor, pieChartBorderColor } from './components/PieChartComponents';
// HELPERS
import { getPieLabelsAndData } from 'helpers/graphHelpers';
// INTERFACES
import { IGenericChart } from './PieChartInterface';
// STYLES
import 'sassVariables/charts.scss';

const PieChart = ({ stocks, crypto, title }: IGenericChart) => {
  Chart.register(...registerables);

  const { labels, quantities } = getPieLabelsAndData(stocks!, crypto!);

  const data = {
    labels,
    datasets: [
      {
        label: 'Makeup of Portfolio',
        data: quantities,
        backgroundColor: pieChartBackgroundColor,
        borderColor: pieChartBorderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
  };

  // dont show graph if user not holding asset
  const showChart =
    quantities.length === 0 ? (
      <p>You are not currently holding any of this asset!</p>
    ) : (
      <Doughnut data={data} options={options} />
    );

  return (
    <div className='chartWrapper pieWrapper'>
      <h2>{title}</h2>
      {showChart}
    </div>
  );
};

export default PieChart;
