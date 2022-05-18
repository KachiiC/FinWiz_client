// COMPONENTS
import { PageCompanyProfile, StockChart, StockFundamental, StockTicker } from './components/DetailComponents';
import { useParams } from 'react-router-dom';
// STYLES
import './Details.scss';

const Details = () => {
  const { symbol } = useParams();

  return (
    <div className="genericContainer">
      <div className="genericInnerContainer">
        <div className='company-details-grid'>
          <StockChart symbol={symbol} />
          <PageCompanyProfile symbol={symbol} />
          <StockTicker symbol={symbol} />
          <StockFundamental symbol={symbol} />
        </div>
      </div>
    </div>
  );
};

export default Details;
