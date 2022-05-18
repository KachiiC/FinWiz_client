import { ForexHeatMap } from 'react-ts-tradingview-widgets';

const ForexBrowse = () => {
  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <ForexHeatMap colorTheme='dark' height={800} width='100%' />;
      </div>
    </div>
  );
};

export default ForexBrowse;
