// Imports
import { Table } from 'antd';

// Local Import
import { Stocks } from '../../../mockData/stocks';

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
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Entry Value Per Share',
      dataIndex: 'entryValuePerShare',
    },
    {
      title: 'Market Value Per Share',
      dataIndex: 'markeValuePerShare',
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
    },
  ];

  
  const stocksData = Stocks.stocksList;

  // const cryptoColumns: any [

  // ];


  return (
    <>
      <Table  dataSource={stocksData} columns={stocksColumns} />
    </>
  );
};

export default Profile;