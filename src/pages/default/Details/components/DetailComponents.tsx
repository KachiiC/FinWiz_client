// COMPONENTS
import {
  CompanyProfile,
  FundamentalData,
  SingleTicker,
  SymbolOverview,
  TechnicalAnalysis,
} from 'react-ts-tradingview-widgets';
// INTERFACES
import { StockDetailProps } from '../DetailsInterfaces';

export const PageCompanyProfile = ({ symbol }: StockDetailProps) => (
  <div className='company-profile'>
    <CompanyProfile symbol={symbol} height={600} width='100%' colorTheme='dark' />
  </div>
);

export const StockTicker = ({ symbol }: StockDetailProps) => (
  <div className='stock-ticker-widget'>
    <div className='stock-ticker-container'>
      <SingleTicker colorTheme='dark' width={425} symbol={symbol} />
      <TechnicalAnalysis colorTheme='dark' symbol={symbol} height={400} />
    </div>
  </div>
);

export const StockChart = ({ symbol }: StockDetailProps) => (
  <div className='stock-chart-widget'>
    <div className='stock-widget-container'>
      <SymbolOverview symbols={[[symbol || '']]} width='100%' colorTheme='dark' />
    </div>
  </div>
);

export const StockFundamental = ({ symbol }: StockDetailProps) => (
  <div className='stock-chart-widget'>
    <div className='stock-widget-container'>
      <FundamentalData colorTheme='dark' width={'100%'} symbol={symbol} />
    </div>
  </div>
);
