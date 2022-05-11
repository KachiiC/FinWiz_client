// Imports
import { Table } from 'antd';

const StocksTable = ({ stockData }: any) => {
  console.log('stock table: ', stockData);
  const stocksData = stockData.map((stock): any => {
    return {
      ...stock,
      name: stock.details.name,
      marketValuePerShare: stock.details.marketValuePerShare,
    };
  });
  
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
      dataIndex: 'marketValuePerShare',
      sorter: (a, b) => a.marketValuePerShare - b.marketValuePerShare,
    },
    {
      title: 'Total Value Of Shares',
      dataIndex: 'totalValueOfShares',
      sorter: (a, b) => a.totalValueOfShares - b.totalValueOfShares,
    },
  ];

  return (
    <Table  pagination={{ pageSize: 5 }} dataSource={stocksData} columns={stocksColumns} rowKey="symbol"/>
  );
};

export default StocksTable;