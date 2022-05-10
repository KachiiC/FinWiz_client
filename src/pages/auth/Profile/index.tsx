// Imports
import { Tabs } from 'antd';
const { TabPane } = Tabs;

// Local Import
import StocksTable from 'components/antdComponents/StocksTable';
import CryptoTable from 'components/antdComponents/CryptoTable';

// Styles
import './profile.scss';

const Profile = () => {

  return (
    <div className='genericContainer '>
      <div className='genericInnerContainer'>
        <Tabs type="card">
          <TabPane tab="Stocks" key="1">
            <StocksTable />
          </TabPane>
          <TabPane tab="Cryptos" key="2">
            <CryptoTable />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;