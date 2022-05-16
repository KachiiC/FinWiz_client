// COMPONENTS
import { Link } from 'react-router-dom';
// DATA
import { defaultColumns } from 'data/columns';

export const stocksColumns = [
  ...defaultColumns,
  {
    title: 'Quantity',
    dataIndex: 'numberOfShares',
    sorter: (a, b) => a.numberOfShares - b.numberOfShares,
  },
  {
    title: 'Average Buy Price',
    dataIndex: 'entryValuePerShare',
    sorter: (a, b) => a.entryValuePerShare - b.entryValuePerShare,
  },
  {
    title: 'Market Value Per Share',
    dataIndex: 'marketValuePerShare',
    sorter: (a, b) => a.marketValuePerShare - b.marketValuePerShare,
  },
  {
    title: 'Total Value',
    dataIndex: 'totalValueOfShares',
    sorter: (a, b) => a.totalValueOfShares - b.totalValueOfShares,
  },
  {
    title: 'Update Investment',
    dataIndex: 'updateInvestments',
    render: (record) => <Link to={`/updateInvestment/stock/${record.symbol}`}>Update Stock</Link>,
  },
];

export const cryptoColumns = [
  ...defaultColumns,
  {
    title: 'Quantity',
    dataIndex: 'quantityOfCrypto',
    sorter: (a, b) => a.quantityOfCrypto - b.quantityOfCrypto,
  },
  {
    title: 'Average Buy Price',
    dataIndex: 'averageValuePerCrypto',
    sorter: (a, b) => a.averageValuePerCrypto - b.averageValuePerCrypto,
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
  },
  {
    title: 'Update Investment',
    dataIndex: 'updateInvestments',
    render: (record) => <Link to={`/updateInvestment/crypto/${record.symbol}`}>Update Crypto</Link>,
  },
];
