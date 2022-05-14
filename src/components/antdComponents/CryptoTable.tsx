// Imports
import { Table } from 'antd';
import { Link } from 'react-router-dom';
// Local imports
import { ICryptoTable } from './interfaces/ICryptoTable';
import { IUserCrypto, ICombinedCrypto } from 'interfaces/crypto/ICrypto';

const CryptoTable = ({ cryptoData }: ICryptoTable) => {

  const cryptosData = cryptoData.map((crypto: IUserCrypto) :ICombinedCrypto  => {
    return {
      ...crypto,
      name: crypto.details.name,
      marketValuePerCrypto: crypto.details.marketValuePerCrypto,
    };
  });

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
      dataSource={cryptosData} 
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