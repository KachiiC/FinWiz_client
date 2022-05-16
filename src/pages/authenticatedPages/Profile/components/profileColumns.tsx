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
    render: (text, record) => <Link to={`/updateInvestment/stock/${record.symbol}`}>Update Stock</Link>,
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
    render: (text, record) => <Link to={`/updateInvestment/crypto/${record.symbol}`}>Update Crypto</Link>,
    align: 'center'
  },
];
