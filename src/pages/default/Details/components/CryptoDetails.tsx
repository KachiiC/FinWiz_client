import { cryptoTickerData } from 'pages/default/Browse/BrowseData';
import BrowseTicker from 'pages/default/Browse/components/BrowseTicker';
import { useParams } from 'react-router-dom';
import { MiniChart } from 'react-ts-tradingview-widgets';


const CryptoDetails = () => {
  const { symbol } = useParams();

  return (
    <div>
      <BrowseTicker data={cryptoTickerData} />
      <div className='genericContainer'>
        <div className='genericInnerContainer'>
          <MiniChart symbol={symbol} colorTheme='dark' />
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
