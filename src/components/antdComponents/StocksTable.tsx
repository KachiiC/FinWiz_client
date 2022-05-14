// Imports
import { Table } from 'antd';

// Local imports
import { IUserStock, ICombinedStock } from 'interfaces/stocks/IStocks';
import { Link } from 'react-router-dom';
import { IStocksTable } from './interfaces/IStocksTable';

const StocksTable = ({ stockData }: IStocksTable) => {
  const stocksData = stockData.map((stock: IUserStock): ICombinedStock  => {
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
      title: 'Quantity',
      dataIndex: 'numberOfShares',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.numberOfShares - b.numberOfShares,
    },
    {
      title: 'Average Buy Price',
      dataIndex: 'entryValuePerShare',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.entryValuePerShare - b.entryValuePerShare,
    },
    {
      title: 'Market Value Per Share',
      dataIndex: 'marketValuePerShare',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.marketValuePerShare - b.marketValuePerShare,
    },
    {
      title: 'Total Value',
      dataIndex: 'totalValueOfShares',
      sorter: (a: ICombinedStock, b: ICombinedStock) => a.totalValueOfShares - b.totalValueOfShares,
    },
    {
      title: 'Update Investment',
      render: (record) => (
        <>
          <Link to={`/updateInvestment/stock/${record.symbol}`}>Update Stock</Link>
        </>
      ),
    }
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