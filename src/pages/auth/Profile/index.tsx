// Imports
import { Table, Input, Button, Space, Tabs } from 'antd';
import BrowseImg from '../../../assets/icons/search.svg';
const { TabPane } = Tabs;

// Local Import
import { Stocks } from '../../../mockData/stocks';
import { Cryptos } from '../../../mockData/cryptos';

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
    <div className='profileContainer'>
      <div className='profileTableContainer'>
        <Tabs type="card">
          <TabPane tab="Stocks" key="1">
            <Table  dataSource={stocksData} columns={stocksColumns} onChange={onChange}/>
          </TabPane>
          <TabPane tab="Cryptos" key="2">
            <Table  dataSource={cryptoData} columns={cryptoColumns} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;