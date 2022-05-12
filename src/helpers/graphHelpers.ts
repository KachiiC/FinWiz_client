import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';
import { IUserStock } from 'interfaces/stocks/IStocks';
import { IUserCrypto } from 'interfaces/crypto/ICrypto';

const calcProfits = (investmentValues: IUserInvestmentValue[]) => {
  const investmentLength = investmentValues.length;
  const lastTwoInvestments = investmentValues.slice(investmentLength-2);
  const status = lastTwoInvestments[0].value < lastTwoInvestments[1].value ? 'increased' : 'decreased';
  const value = Math.abs(lastTwoInvestments[0].value - lastTwoInvestments[1].value).toFixed(2);
  
  return { status, value };
};

const getAssetsInProfit = (stocks: IUserStock[], crypto: IUserCrypto[]) => {
  let assetsInProfit = 0;
  let noOfAssets = 0;
  if(stocks) {
    noOfAssets += stocks.length;
    stocks.forEach(stock => {
      if(stock.entryValuePerShare < stock.details.marketValuePerShare) assetsInProfit++;
    });
  }
  if(crypto) {
    noOfAssets += crypto.length;
    crypto.forEach(crypto => {
      if(crypto.averageValuePerCrypto < crypto.details.marketValuePerShare) assetsInProfit++;
    });
  }

  return (100 / noOfAssets) * assetsInProfit;
};

const getPieLabelsAndData = (stocks: IUserStock[], crypto: IUserCrypto[]) => {
  const labels: string[] = [];
  const quantities: number[] = [];

  if(stocks && crypto) {
    labels.push('Stock');
    labels.push('Crypto');
    // ! todo - calc makeup of stocks crypto

  } else if(stocks){
    stocks.forEach((stock: IUserStock): void => {
      labels.push(stock.details.name);
      quantities.push(stock.totalValueOfShares);
    });
  } else if(crypto) {
    crypto.forEach(crypto => {
      labels.push(crypto.symbol);
      quantities.push(crypto.totalCryptoValue);
    });
  }

  return { labels, quantities };
};

export {
  calcProfits,
  getAssetsInProfit,
  getPieLabelsAndData
};