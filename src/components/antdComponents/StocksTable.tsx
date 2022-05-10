// Imports
import { Table } from 'antd';

// Local Import
import { Stocks } from 'mockData/stocks';

const StocksTable = () => {
  
  const stocksColumns = [ // Has to be any because of ant design ColumnGroupType TODO check when real data comes across
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'Number Of Shares',
      dataIndex: 'numberOfShares',
      sorter: (a, b) => a.numberOfShares - b.numberOfShares,
    },
    {
      title: 'Entry Value Per Share',
      dataIndex: 'entryValuePerShare',
      sorter: (a, b) => a.entryValuePerShare - b.entryValuePerShare,
    },
    {
      title: 'Market Value Per Share',
      dataIndex: 'markeValuePerShare',
      sorter: (a, b) => a.markeValuePerShare - b.markeValuePerShare,
    },
    {
      title: 'Total Value Of Shares',
      dataIndex: 'totalValueOfShares',
      sorter: (a, b) => a.totalValueOfShares - b.totalValueOfShares,
    },
  ];

  const stocksData = Stocks.stocksList;

  return (
    <Table  pagination={{ pageSize: 5 }} dataSource={stocksData} columns={stocksColumns} />
  );
};

export default StocksTable;