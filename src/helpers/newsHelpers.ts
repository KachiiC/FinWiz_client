import { IUserProfile } from 'interfaces/user/IUserProfile';

export const getPortfolioNews = (profile: IUserProfile) => {
  if(!profile.cryptos && !profile.stocks) return 'AAPL, BTC';
  
  let result = '';
  if(profile.cryptos) {
    result += `${profile.cryptos.highestInvestedCurrency},`;
  }
  if(profile.stocks){
    result += `${profile.stocks.highestInvestmentStock}`;
  }
  return result;
};