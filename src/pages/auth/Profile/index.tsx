// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

// Local Import
import StocksTable from 'components/antdComponents/StocksTable';
import CryptoTable from 'components/antdComponents/CryptoTable';
import { userApi } from 'redux/store';

// Styles
import './profile.scss';

const Profile = () => {

  // get user data from auth0
  const { user } = useAuth0();
  console.log('user info: ', user);

  // can destructure loading, status etc. from here also
  const { data: userObject } = userApi.useGetUserIdQuery('123');
  // console.log('received: ', userObject);

  return (
    <div className='genericContainer '>
      <div className='genericInnerContainer'>

        {/* portfolio tables */}
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