// Imports
import { Table } from 'antd';

// Local imports
import { IUserStock, ICombinedStock } from 'interfaces/stocks/IStocks';
import { IStocksTable } from './interfaces/IStocksTable';

const StocksTable = ({ stockData }: IStocksTable) => {
  const stocksData = stockData.map((stock: IUserStock) :ICombinedStock  => {
    return {
      ...stock,
      name: stock.details.name,
      marketValuePerShare: stock.details.marketValuePerShare,
    };
  });
  
  const stocksColumns = [ 
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
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.numberOfShares - b.numberOfShares,
    },
    {
      title: 'Entry Value Per Share',
      dataIndex: 'entryValuePerShare',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.entryValuePerShare - b.entryValuePerShare,
    },
    {
      title: 'Market Value Per Share',
      dataIndex: 'marketValuePerShare',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.marketValuePerShare - b.marketValuePerShare,
    },
    {
      title: 'Total Value Of Shares',
      dataIndex: 'totalValueOfShares',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.totalValueOfShares - b.totalValueOfShares,
    },
  ];

  return (
    <Table 
      pagination={{ pageSize: 5 }} 
      dataSource={stocksData} 
      columns={stocksColumns} 
      rowKey="symbol"
      onRow={(record) => {
        return {
          onClick: () => {console.log(record);}
        };
      }}
    />
  );
};

export default StocksTable;