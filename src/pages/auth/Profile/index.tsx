// Imports
import { Table, Input, Button, Space, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

// Local Import
import { Stocks } from '../../../mockdata/stocks';
import { Cryptos } from '../../../mockdata/cryptos';

// Styles
import './profile.scss';

const Profile = () => {

  


  const stocksColumns: any = [ // TODO change this to an interface rather than any
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
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.numberOfShares - b.numberOfShares,
    },
    {
      title: 'Entry Value Per Share',
      dataIndex: 'entryValuePerShare',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.entryValuePerShare - b.entryValuePerShare,
    },
    {
      title: 'Market Value Per Share',
      dataIndex: 'markeValuePerShare',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.markeValuePerShare - b.markeValuePerShare,
    },
    {
      title: 'First Bought',
      dataIndex: 'firstBought',
    },
    {
      title: 'Last Bought',
      dataIndex: 'lastBought',
    },
    {
      title: 'Total Value Of Shares',
      dataIndex: 'totalValueOfShares',
      sorter: (a, b) => a.totalValueOfShares - b.totalValueOfShares,
    },
  ];

  
  const stocksData = Stocks.stocksList;

  const cryptoColumns: any = [
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
      title: 'First Bought',
      dataIndex: 'firstBought',
    },
    {
      title: 'Last Bought',
      dataIndex: 'lastBought',
    },
    {
      title: 'totalCryptoValue',
      dataIndex: 'totalCryptoValue',
      sorter: (a, b) => a.totalCryptoValue - b.totalCryptoValue,
    },
  ];
  
  const cryptoData = Cryptos.cryptoList;

  function onChange(sorter) {
    console.log('params', sorter);
  }

  return (
    <>
      <Tabs type="card">
        <TabPane tab="Stocks" key="1">
          <Table  dataSource={stocksData} columns={stocksColumns} onChange={onChange}/>
        </TabPane>
        <TabPane tab="Cryptos" key="2">
          <Table  dataSource={cryptoData} columns={cryptoColumns} />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Profile;