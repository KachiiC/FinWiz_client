// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Tabs } from 'antd';

// Local Import
import StocksTable from 'components/antdComponents/StocksTable';
import CryptoTable from 'components/antdComponents/CryptoTable';
import { userApi } from 'redux/store';

// Styles
import './profile.scss';

const Profile = () => {
  const { TabPane } = Tabs;

  // get user data from auth0
  const { user, isLoading } = useAuth0();
  if(!isLoading && user?.sub){
    // can destructure loading, status etc. from here also
    const { data: userInfo } = userApi.useGetUserQuery(user.sub);
    console.log('received: ', userInfo);
  }

  return (
    <div className='genericContainer'>
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