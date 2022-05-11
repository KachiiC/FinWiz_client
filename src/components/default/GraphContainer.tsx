// Local imports
import { IGraphContainer } from './interfaces/ICharts';
import LineChart from 'components/default/LineChart';
import PieChart from 'components/default/PieChart';
import BarChart from 'components/default/BarChart';

const GraphContainer = ({ stocks, crypto, investmentValues }: IGraphContainer ) => {
  return (
    <>
      <LineChart investmentValues={investmentValues}/>
      <PieChart stocks={stocks} crypto={crypto}/>
      <BarChart stocks={stocks} crypto={crypto}/>
    </>
  );
};

export default GraphContainer;