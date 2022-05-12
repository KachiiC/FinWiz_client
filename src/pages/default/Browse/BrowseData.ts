

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

export const browseStockColumns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: 'Value',
    dataIndex: 'marketValuePerShare',
    render: (text: string) => `$${text}`,
    align: 'center'
  },
  {
    title: 'Change amount (+/-)',
    dataIndex: 'changeAmount',
    render: (text) => `${currencyConverter(text)}`,
    align: 'center'
  },
  {
    title: 'Change Percentage (%)',
    dataIndex: 'changePercent',
    render: (text) => `${text}%`,
    align: 'center',
    responsive: ['md'],

  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    render: (text) => `${numberWithCommas(text)}`,
    align: 'center',
    responsive: ['lg'],
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    render: (text) => `${numberWithCommas(text)}`,
    align: 'center',
    responsive: ['lg'],
  }
];