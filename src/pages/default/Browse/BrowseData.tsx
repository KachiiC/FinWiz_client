import { currencyConverter, numberWithCommas } from 'helpers/integer.helpers';

export const browseLists = [
  {
    title: 'Gainers',
    url: 'gainers',
  },
  {
    title: 'Losers',
    url: 'losers',
  },
  {
    title: 'Most Active',
    url: 'mostactive',
  },
];

const positiveNegative = (num, type?) => {

  const classLogic = num > 0 ? 'positive' : 'negative';
  const typeLogic = type === '%' ? `${num}%` : `${currencyConverter(num)}`;

  return <div className={`${classLogic}-amount`}>{typeLogic}</div>;
};

export const browseStockColumns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    sorter: (a, b) => a.rank - b.rank,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: 'Value',
    dataIndex: 'marketValuePerShare',
    render: (text: string) => `$${text}`,
    align: 'center',
    sorter: (a, b) => a.marketValuePerShare - b.marketValuePerShare,
  },
  {
    title: 'Change amount (+/-)',
    dataIndex: 'changeAmount',
    render: (text) => positiveNegative(text),
    align: 'center',
    sorter: (a, b) => a.changeAmount - b.changeAmount,
  },
  {
    title: 'Change Percentage (%)',
    dataIndex: 'changePercent',
    render: (text) => positiveNegative(text, '%'),
    align: 'center',
    responsive: ['md'],
    sorter: (a, b) => a.changePercent - b.changePercent,
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    render: (text) => `${numberWithCommas(text)}`,
    align: 'center',
    responsive: ['lg'],
    sorter: (a, b) => a.volume - b.volume,
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    render: (text) => `${numberWithCommas(text)}`,
    sorter: (a, b) => a.marketCap - b.marketCap,
    align: 'center',
    reponsive: ['lgmarketCap'],
  },
];
