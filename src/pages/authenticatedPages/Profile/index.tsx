// COMPONENTS
import AntdTabs from 'components/antdComponents/AntdTabs';
import AntdTable from 'components/antdComponents/AntdTable';
import { cryptoColumns, stocksColumns } from './components/profileColumns';
import GraphContainer from 'components/siteComponents/GraphContainer';
import Spinner from 'components/antdComponents/AntdSpinner';
import UserDetails from 'components/siteComponents/UserDetails';
import UserNewsColumnData from './components/UserNewsColumnData';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
// INTERFACES
import { IUserProfile } from 'interfaces/user/IUserProfile';
// REDUX
import { userApi } from 'redux/store';
import { cryptoDataHelper, stockDataHelpers } from 'helpers/profileHelpers';

const Profile = () => {
  // get user data from auth0
  const { user, isLoading } = useAuth0();

  const { useGetUserQuery } = userApi;

  // get the user profile
  let profile: IUserProfile | undefined;

  if (!isLoading && user?.sub) {
    const { data: userProfile, isLoading: profileLoading } = useGetUserQuery(user.sub, {
      pollingInterval: 300000,
    });

    if (!profileLoading) profile = userProfile;
    console.log(profile);
  }

  // get stocks and crypto values or set as empty array
  const stocksData = profile?.stocks ? profile.stocks.userStock : [];
  const cryptoData = profile?.cryptos ? profile.cryptos.cryptoList : [];

  const investmentsData = [
    {
      title: 'Stocks',
      data: stockDataHelpers(stocksData),
      columns: stocksColumns,
    },
    {
      title: 'Crypto',
      data: cryptoDataHelper(cryptoData),
      columns: cryptoColumns,
    },
    {
      title: 'Commodities',
      data: cryptoDataHelper(cryptoData),
      columns: cryptoColumns,
    },
  ];

  const tabsData = investmentsData.map((inv) => {
    const { columns, data, title } = inv;
    return {
      title,
      content: <AntdTable data={data} columns={columns} />,
    };
  });

  // if user or profile is loading display the spinner
  if (!user || !profile) return <Spinner />;

  return (
    <>
      <div className='genericContainer'>
        <div className='genericInnerContainer'>
          {/* user details */}
          <UserDetails user={user} profile={profile} />
          {/* tables */}
          <AntdTabs data={tabsData} />
        </div>
      </div>

      {/* Graphs */}
      {profile.investmentValues.length > 1 && (
        <GraphContainer
          stocks={stocksData}
          crypto={cryptoData}
          investmentValues={profile.investmentValues}
        />
      )}
      {/* News */}
      <UserNewsColumnData />
    </>
  );
};

export default Profile;
