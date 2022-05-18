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
    <CompanyProfile symbol={symbol} height={600} isTransparent={true} colorTheme='dark' />
  </div>
);

export const StockTicker = ({ symbol }: StockDetailProps) => (
  <div className='stock-ticker-widget'>
    <div className='stock-ticker-container'>
      <SingleTicker colorTheme='dark' symbol={symbol} isTransparent={true} />
      <TechnicalAnalysis colorTheme='dark' symbol={symbol} height={400} isTransparent={true} />
    </div>
  </div>
);

export const StockChart = ({ symbol }: StockDetailProps) => (
  <div className='stock-chart-widget'>
    <div className='stock-widget-container'>
      <SymbolOverview symbols={[[symbol || '']]} width='100%' colorTheme='dark' isTransparent={true} />
    </div>
  </div>
);

export const StockFundamental = ({ symbol }: StockDetailProps) => (
  <div className='stock-chart-widget'>
    <div className='stock-widget-container'>
      <FundamentalData colorTheme='dark' width={'100%'} symbol={symbol} isTransparent={true} />
    </div>
  </div>
);
