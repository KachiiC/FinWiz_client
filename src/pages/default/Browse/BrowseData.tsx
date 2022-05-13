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

export const cryptoLists = [
  {
    title: 'Top',
    url: 'top',
  },
  {
    title: 'Oldest',
    url: 'oldest',
  },
  {
    title: 'Newest',
    url: 'newest',
  },
];

const positiveNegative = (num, type?) => {
  const classLogic = num > 0 ? 'positive' : 'negative';
  const typeLogic = type === '%' ? `${num}%` : `${currencyConverter(num)}`;

  return <div className={`${classLogic}-amount`}>{typeLogic}</div>;
};

export const bestCryptoColumns = [
  {
    title: 'rank',
    dataIndex: 'rank',
    align: 'center',
    sorter: (a, b) => a.rank - b.rank,
    defaultSort: (a,b) => a.rank - b.rank
  },
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: 'symbol',
    dataIndex: 'symbol',
    render: (text: string) => `$${text}`,
    align: 'center',
  },
  {
    title: 'price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Hourly Change',
    dataIndex: 'hourly_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.hourly_change - b.hourly_change,
  },
  {
    title: 'Daily Change',
    dataIndex: 'daily_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.daily_change - b.daily_change,
  },
  {
    title: 'Weekly Change',
    dataIndex: 'weekly_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.weekly_change - b.weekly_change,
  },
  {
    title: 'Monthly Change',
    dataIndex: 'monthly_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.monthly_change - b.monthly_change,
  },
];

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
