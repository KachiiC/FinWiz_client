import { numberWithCommas, positiveNegative } from 'helpers/integer.helpers';

export const browseCryptoColumns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    align: 'center',
    sorter: (a, b) => a.rank - b.rank,
    defaultSort: (a, b) => a.rank - b.rank,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    align: 'center',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    render: (text: string) => `$${text}`,
    align: 'center',
  },
  {
    title: 'Hourly Change',
    dataIndex: 'hourly_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.hourly_change - b.hourly_change,
    align: 'center',
  },
  {
    title: 'Daily Change',
    dataIndex: 'daily_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.daily_change - b.daily_change,
    align: 'center',
  },
  {
    title: 'Weekly Change',
    dataIndex: 'weekly_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.weekly_change - b.weekly_change,
    align: 'center',
  },
  {
    title: 'Monthly Change',
    dataIndex: 'monthly_change',
    render: (text) => positiveNegative(text),
    sorter: (a, b) => a.monthly_change - b.monthly_change,
    align: 'center',
  },
];

export const browseStockColumns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    sorter: (a, b) => a.rank - b.rank,
    align: 'center',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    align: 'center',
  },
  {
    title: 'Value',
    dataIndex: 'marketValuePerShare',
    render: (text: string) => `$${text}`,
    sorter: (a, b) => a.marketValuePerShare - b.marketValuePerShare,
    align: 'center',
  },
  {
    title: 'Change (+/-)',
    dataIndex: 'changeAmount',
    render: (text) => positiveNegative(text),
    align: 'center',
    sorter: (a, b) => a.changeAmount - b.changeAmount,
  },
  {
    title: 'Change (%)',
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

export const browseCommoditiesColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'last',
    sorter: (a, b) => a.last - b.last,
    render: (text) => `$${text}`,
    align: 'center'
  },
  {
    title: 'Change',
    dataIndex: 'change',
    sorter: (a, b) => a.change - b.change,
    render: (text) => positiveNegative(text),
    align: 'center'
  },
  {
    title: 'Change (%)',
    dataIndex: 'change_percentage',
    sorter: (a, b) => a.change_percentage - b.change_percentage,
    render: (text) => positiveNegative(text, '%'),
    align: 'center'
  },
  {
    title: 'Last Close',
    dataIndex: 'last_close',
    sorter: (a, b) => a.last_close - b.last_close,
    render: (text) => `$${text}`,
    align: 'center'
  },
  {
    title: 'High',
    dataIndex: 'high',
    sorter: (a, b) => a.high - b.high,
    render: (text) => `$${text}`,
    align: 'center'
  },
  {
    title: 'Low',
    dataIndex: 'low',
    sorter: (a, b) => a.low - b.low,
    render: (text) => `$${text}`,
    align: 'center'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    align: 'center',
    filters: [
      {
        text: 'Metals',
        value: 'metals'
      },
      {
        text: 'Softs',
        value: 'softs'
      },
      {
        text: 'Meats',
        value: 'meats'
      },
      {
        text: 'Energy',
        value: 'energy'
      },
      {
        text: 'Grains',
        value: 'grains'
      },
    ],
    onFilter: (value, record) => record.type === value,
    filterSearch: true,

  },
];
