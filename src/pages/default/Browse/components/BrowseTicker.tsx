import { TickerTape } from 'react-ts-tradingview-widgets';

interface BrowseTickerProps {
  data: {
    description: string;
    proName: string;
    title: string;
  }[];
}

const BrowseTicker = ({ data }: BrowseTickerProps) => {
  return (
    <div className='browse-ticker'>
      <TickerTape colorTheme='dark' symbols={data} />
    </div>
  );
};

export default BrowseTicker;
