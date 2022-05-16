// COMPONENTS
import { PageCompanyProfile, StockChart, StockTicker } from './components/DetailComponents';
import { useParams } from 'react-router-dom';
// STYLES
import './Details.css';

const Details = () => {
  const { symbol } = useParams();

  return (
    <div className='company-details-grid'>
      <PageCompanyProfile symbol={symbol} />
      <StockTicker symbol={symbol} />
      <StockChart symbol={symbol} />
    </div>
  );
};

export default Details;
