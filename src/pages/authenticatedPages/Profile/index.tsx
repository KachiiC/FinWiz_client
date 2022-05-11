// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Tabs } from 'antd';

// Local Imports
import StocksTable from 'components/antdComponents/StocksTable';
import CryptoTable from 'components/antdComponents/CryptoTable';
import { userApi } from 'redux/store';
import LineChart from 'components/default/LineChart';
import PieChart from 'components/default/PieChart';
import Spinner from 'components/antdComponents/Spinner';
import UserDetails from 'components/authenticatedComponents/UserDetails';
import { IUserProfile } from 'interfaces/user/IUserProfile';

// Styles
import './profile.scss';
import BarChart from 'components/default/BarChart';

const Profile = () => {
  const { TabPane } = Tabs;

  // get user data from auth0
  const { user, isLoading } = useAuth0();

  // get the user profile
  let profile: IUserProfile | undefined;
  if(!isLoading && user?.sub){
    const { data: userProfile, isLoading: profileLoading } = userApi.useGetTestUserQuery();
    if(!profileLoading) {
      profile = userProfile;
    }
  }

  // if user or profile is loading display the spinner
  if(!user || !profile) return (<Spinner />);

  return (
    <>
      <div className='genericContainer'>
        <div className='genericInnerContainer'>  

          <UserDetails user={user} profile={profile}/>

          {/* portfolio tables */}
          <Tabs type="card">
            <TabPane tab="Stocks" key="1">
              <StocksTable stockData={profile.stocks}/>
            </TabPane>
            <TabPane tab="Cryptos" key="2">
              <CryptoTable />
            </TabPane>
          </Tabs>

        </div>
      </div>

      {/* graphs*/}
      <div className='genericContainer'>
        <div className='genericInnerContainer'>  
          <LineChart investmentValues={profile.investmentValues}/>
          <PieChart stocks={profile.stocks} crypto={profile.cryptos}/>
          <BarChart stocks={profile.stocks} crypto={profile.cryptos}/>
        </div>
      </div>
    </>
  );
};

export default Profile;