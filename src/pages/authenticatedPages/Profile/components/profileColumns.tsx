// COMPONENTS
import { Link } from 'react-router-dom';
// DATA
import { currencyConverter } from 'helpers/integer.helpers';

export const stocksColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Quantity',
    dataIndex: 'numberOfShares',
    sorter: (a, b) => a.numberOfShares - b.numberOfShares,
    align: 'center'
  },
  {
    title: 'Average Buy Price',
    dataIndex: 'entryValuePerShare',
    sorter: (a, b) => a.entryValuePerShare - b.entryValuePerShare,
    align: 'center',
    render: (text) => `$${text}`
  },
  {
    title: 'Market Value Per Share',
    dataIndex: 'marketValuePerShare',
    sorter: (a, b) => a.marketValuePerShare - b.marketValuePerShare,
    align: 'center',
    render: (text) => `$${text}`
  },
  {
    title: 'Total Value',
    dataIndex: 'totalValueOfShares',
    sorter: (a, b) => a.totalValueOfShares - b.totalValueOfShares,
    render: (text) => `${currencyConverter(text)}`,
    align: 'center'
  },
  {
    title: 'Update Investment',
    dataIndex: 'updateInvestments',
    render: (text, record) => <Link to={`/updateInvestment/stock/${record.symbol}/${record.numberOfShares}`}>Update Stock</Link>,
    align: 'center'
  },
];

export const cryptoColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    align: 'center'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantityOfCrypto',
    sorter: (a, b) => a.quantityOfCrypto - b.quantityOfCrypto,
    align: 'center'
  },
  {
    title: 'Average Buy Price',
    dataIndex: 'averageValuePerCrypto',
    sorter: (a, b) => a.averageValuePerCrypto - b.averageValuePerCrypto,
    align: 'center',
    render: (text) => `$${text}`
  },
  {
    title: 'Market Value Per Crypto',
    dataIndex: 'marketValuePerCrypto',
    sorter: (a, b) => a.marketValuePerCrypto - b.marketValuePerCrypto,
  },
  {
    title: 'Total Value',
    dataIndex: 'totalCryptoValue',
    sorter: (a, b) => a.totalCryptoValue - b.totalCryptoValue,
    render: (text) => `${currencyConverter(text)}`,
    align: 'center'
  },
  {
    title: 'Update Investment',
    dataIndex: 'updateInvestments',
    render: (text, record) => <Link to={`/updateInvestment/crypto/${record.symbol}/${record.quantityOfCrypto}`}>Update Crypto</Link>,
    align: 'center'
  },
];

export const commodityColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    align: 'center',
    render: (text) => `${text.charAt(0).toUpperCase() + text.slice(1)}`
  },
  {
    title: 'Quantity',
    dataIndex: 'quantityOfCommoditiy',
    sorter: (a, b) => a.quantityOfCommoditiy - b.quantityOfCommoditiy,
    align: 'center'
  },
  {
    title: 'Average Buy Price',
    dataIndex: 'averageBuyPrice',
    sorter: (a, b) => a.averageBuyPrice - b.averageBuyPrice,
    align: 'center',
    render: (text) => `$${text}`
  },
  {
    title: 'Market Value Per Crypto',
    dataIndex: 'marketValuePerCommodity',
    sorter: (a, b) => a.marketValuePerCommodity - b.marketValuePerCommodity,
  },
  {
    title: 'Total Value',
    dataIndex: 'totalCommodityValue',
    sorter: (a, b) => a.totalCommodityValue - b.totalCommodityValue,
    render: (text) => `${currencyConverter(text)}`,
    align: 'center'
  },
  {
    title: 'Update Investment',
    dataIndex: 'updateInvestments',
    render: (text, record) => <Link to={`/updateInvestment/crypto/${record.symbol}/${record.quantityOfCrypto}`}>Update Commodity</Link>,
    align: 'center'
  },
];

