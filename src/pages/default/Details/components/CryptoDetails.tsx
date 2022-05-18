import { useParams } from 'react-router-dom';
import { MiniChart, TickerTape } from 'react-ts-tradingview-widgets';

const symbolsData = [
  {
    description: '',
    proName: 'COINBASE:ETHUSD',
    title: ''
  },
  {
    description: '',
    proName: 'COINBASE:BTCUSD',
    title: ''
  },
  {
    description: 'Tether',
    proName: 'COINBASE:USDTUSD',
    title: ''
  },
  {
    description: '',
    proName: 'COINBASE:USDCGBP',
    title: ''
  },
  {
    description: '',
    proName: 'COINBASE:ADAUSD',
    title: ''
  },
  {
    description: '',
    proName: 'COINBASE:BUSDUSD',
    title: ''

  },
];

const CryptoDetails = () => {

  const { symbol } = useParams();
  
  return (
    <div>
      <TickerTape colorTheme='dark' symbols={symbolsData} />
      <div className='genericContainer'>
        <div className='genericInnerContainer'>
          <MiniChart symbol={symbol} colorTheme='dark'/>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
