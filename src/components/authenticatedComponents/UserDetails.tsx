// Local imports
import { IUserDetails } from './interfaces/IUserDetails';
import { calcProfits } from 'helpers/graphHelpers';

// Styles 
import './styles/UserDetails.scss';

const UserDetails = ({ user, profile }: IUserDetails) => {

  let upDown = '';
  if(profile.investmentValues.length > 0){
    const { status } = calcProfits(profile.investmentValues);
    upDown = status === 'increased' ? 'positive-amount' : 'negative-amount';
  }

  const largestStockHold = profile.stocks ? profile.stocks?.highestInvestmentStock : 'N/A';
  const largestCryptoHold = profile.cryptos ? profile.cryptos?.highestInvestedCurrency : 'N/A';

  return (
    <div className="userDetailsContainer">
      <h1>{user.given_name}&apos;s Portfolio</h1>
      <p>Portfolio Value: <span className={upDown}>${profile.totalInvestmentValue}</span></p>
      <p>Largest Stock Hold: <span>{largestStockHold}</span></p>
      <p>Largest Crypto Hold: <span>{largestCryptoHold}</span></p>
    </div>
  );
};

export default UserDetails;