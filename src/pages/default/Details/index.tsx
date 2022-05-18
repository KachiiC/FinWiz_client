// COMPONENTS
import { PageCompanyProfile, StockChart, StockFundamental, StockTicker } from './components/DetailComponents';
import { useParams } from 'react-router-dom';
// STYLES
import './Details.css';

const Details = () => {
  const { symbol } = useParams();

  return (
    <div className='company-details-grid'>
      <StockChart symbol={symbol} />
      <PageCompanyProfile symbol={symbol} />
      <StockTicker symbol={symbol} />
      <StockFundamental symbol={symbol} />
    </div>
  );
};

export default Details;
