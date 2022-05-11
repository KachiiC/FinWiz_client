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

// Styles
import './profile.scss';
import BarChart from 'components/default/BarChart';

const Profile = () => {
  const { TabPane } = Tabs;

  // get user data from auth0
  const { user, isLoading } = useAuth0();

  // get the user profile
  let profile: any | undefined;
  if(!isLoading && user?.sub){
    const { data: userProfile, isLoading: profileLoading } = userApi.useGetTestUserQuery();
    if(!profileLoading) {
      profile = userProfile;
      console.log(user);
      console.log('profile: ', userProfile);
    }
  }

  // if user or profile is loading display the spinner
  if(!user || !profile) return (<Spinner />);

  return (
    <>
      <div className='genericContainer'>
        <div className='genericInnerContainer'>  

          <h1 className='textPrimary'>{user.given_name}&apos;s Portfolio</h1> 

          

          {/* portfolio tables */}
          {profile && 
          <Tabs type="card">
            <TabPane tab="Stocks" key="1">
              <StocksTable stockData={profile.stocks}/>
            </TabPane>
            <TabPane tab="Cryptos" key="2">
              <CryptoTable />
            </TabPane>
          </Tabs>
          }
        </div>
      </div>

      <div className='genericContainer'>
        <div className='genericInnerContainer'>  
          {/* graphs*/}
          {profile && 
          <>
            <LineChart investmentValues={profile.investmentValues}/>
            <PieChart stocks={profile.stocks} crypto={profile.crypto}/>
            <BarChart stocks={profile.stocks} crypto={profile.crypto}/>
          </>
          }
        </div>
      </div>
    </>
  );
};

export default Profile;