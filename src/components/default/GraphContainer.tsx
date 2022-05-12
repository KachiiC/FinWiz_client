// Local imports
import { IGraphContainer } from './interfaces/ICharts';
import LineChart from 'components/default/LineChart';
import PieChart from 'components/default/PieChart';
import BarChart from 'components/default/BarChart';
import { calcProfits, getAssetsInProfit } from 'helpers/graphHelpers';

// Styles
import './styles/GraphContainer.scss';

const GraphContainer = ({ stocks, crypto, investmentValues }: IGraphContainer ) => {

  // get profit/loss, assets in profit
  const { status, value } = calcProfits(investmentValues);
  const profit = getAssetsInProfit(stocks, crypto);

  return (
    <div className='genericContainer bgPrimary borderAboveBelow'>
      <div className='genericInnerContainer'>

        <div className="graphDetailsContainer">
          <div className="graphDetails graphLeft">
            <h1>Portfolio Value</h1>
            <p>Your portfolio has {status} in value by ${value} since your last visit.</p>
          </div>
          <div className="chart">
            <LineChart investmentValues={investmentValues}/>
          </div>
        </div>

        <div className="graphDetailsContainer">
          <div className="chart">
            <BarChart stocks={stocks} crypto={crypto}/>
          </div>
          <div className="graphDetails graphRight">
            <h1>Entry Price vs. Market Price</h1>
            <p>{profit}% of your assets are in profit.</p>
          </div>
        </div>

        <div className="pieGraphDetails">
          <h1>What are you made of?</h1>
        </div>

        <div className="graphDetailsContainer">
          <div className="pieChartContainer">
            <PieChart stocks={stocks} crypto={crypto} title="Stocks vs. Crypto"/>
            <PieChart stocks={stocks} title="Stocks"/>
            <PieChart crypto={crypto} title="Crypto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;