import { useParams } from 'react-router-dom';
import './Details.css';
import { CompanyProfile, TechnicalAnalysis, SymbolOverview, SingleTicker } from 'react-ts-tradingview-widgets';

const Details = () => {
  
  const { symbol } = useParams();

  const companyProfile = (
    <div className='company-profile'>
      <CompanyProfile symbol={symbol} height={600} width='100%' colorTheme='dark' />
    </div>
  );

  const stockTicker = (
    <div className='stock-ticker-widget'>
      <div className='stock-ticker-container'>
        <SingleTicker colorTheme="dark" width={425} symbol={symbol}/>
        <TechnicalAnalysis colorTheme='dark' symbol={symbol} height={400} />
      </div>
    </div>
  );

  const stockChart = (
    <div className='stock-chart-widget'>
      <div className='stock-widget-container'>
        <SymbolOverview symbols={[[symbol || '']]} width='100%' colorTheme='dark' />
      </div>
    </div>
  );

  return (
    <div className='company-details-grid'>
      {companyProfile}
      {stockTicker}
      {stockChart}
    </div>
  );
};

export default Details;
