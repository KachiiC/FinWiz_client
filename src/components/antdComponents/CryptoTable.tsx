// Imports
import { Table } from 'antd';

// Local imports
import { ICryptoTable } from './interfaces/ICryptoTable';

const CryptoTable = ({ cryptoData }: ICryptoTable) => {

  const cryptoColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'Entry Value Per Crypto',
      dataIndex: 'entryValuePerCrypto',
      sorter: (a, b) => a.entryValuePerCrypto - b.entryValuePerCrypto,
    },
    {
      title: 'Market Value Per Crypto',
      dataIndex: 'marketValuePerCrypto',
      sorter: (a, b) => a.marketValuePerCrypto - b.marketValuePerCrypto,
    },
    {
      title: 'Quantity Of Crypto',
      dataIndex: 'quantityOfCrypto',
      sorter: (a, b) => a.quantityOfCrypto - b.quantityOfCrypto,
    },
    {
      title: 'totalCryptoValue',
      dataIndex: 'totalCryptoValue',
      sorter: (a, b) => a.totalCryptoValue - b.totalCryptoValue,
    },
  ];
  
  return (
    <Table 
      pagination={{ pageSize: 5 }}  
      dataSource={cryptoData} 
      columns={cryptoColumns} 
      rowKey="symbol"
      onRow={(record) => {
        return {
          onClick: () => {console.log(record);}
        };
      }}
    />
  );
};

export default CryptoTable;