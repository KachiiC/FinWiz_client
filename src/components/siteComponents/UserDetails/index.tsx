// INTERFACES
import { IUserDetails } from './UserDetailsInterfaces';
// STYLES
import './UserDetails.scss';

const UserDetails = ({ user, profile }: IUserDetails) => {

  const { totalInvestmentValue, stocks, cryptos } = profile;

  const largestStockHold = stocks ? stocks?.highestInvestmentStock : 'N/A';
  const largestCryptoHold = cryptos ? cryptos?.highestInvestedCurrency : 'N/A';

  return (
    <div className='userDetailsContainer'>
      <h1>{user.given_name}&apos;s Portfolio</h1>
      <p>
        Portfolio Value: <span>${totalInvestmentValue.toFixed(2)}</span>
      </p>
      <p>
        Largest Stock Hold: <span>{largestStockHold}</span>
      </p>
      <p>
        Largest Crypto Hold: <span>{largestCryptoHold}</span>
      </p>
    </div>
  );
};

export default UserDetails;
