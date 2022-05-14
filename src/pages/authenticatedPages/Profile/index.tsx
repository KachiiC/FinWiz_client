// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Tabs } from 'antd';
// Local Imports
import StocksTable from 'components/antdComponents/StocksTable';
import CryptoTable from 'components/antdComponents/CryptoTable';
import { userApi } from 'redux/store';
import GraphContainer from 'components/default/GraphContainer';
import Spinner from 'components/antdComponents/Spinner';
import UserDetails from 'components/authenticatedComponents/UserDetails';
import { IUserProfile } from 'interfaces/user/IUserProfile';
import UserNewsColumnData from './components/UserNewsColumnData';
// Styles
import './styles/profile.scss';

const Profile = () => {
  const { TabPane } = Tabs;

  // get user data from auth0
  const { user, isLoading } = useAuth0();

  // get the user profile
  let profile: IUserProfile | undefined;
  if(!isLoading && user?.sub){
    const { data: userProfile, isLoading: profileLoading } = userApi.useGetUserQuery(user.sub, { pollingInterval: 300000 });

    if(!profileLoading) {
      profile = userProfile;
    }
  }

  // get stocks and crypto values or set as empty array
  const stocks = profile?.stocks ? profile.stocks.userStock : [];
  const crypto = profile?.cryptos ? profile.cryptos.cryptoList: [];

  // if user or profile is loading display the spinner
  if(!user || !profile) return (<Spinner />);

  return (
    <>
      <div className='genericContainer'>
        <div className='genericInnerContainer'>  
          {/* user details */}
          <UserDetails user={user} profile={profile}/>
          
          {/* tables */}
          <Tabs type="card">
            <TabPane tab="Stocks" key="1">
              <StocksTable stockData={stocks}/>
            </TabPane>
            <TabPane tab="Cryptos" key="2">
              <CryptoTable cryptoData={crypto}/>
            </TabPane>
          </Tabs>

        </div>
      </div>

      {/* Graphs */}
      {}
      {profile.investmentValues.length > 1 &&
      <GraphContainer 
        stocks={stocks} 
        crypto={crypto} 
        investmentValues={profile.investmentValues}  
      />
      }
      {/* News */}
      <UserNewsColumnData />
    </>
  );
};

export default Profile;