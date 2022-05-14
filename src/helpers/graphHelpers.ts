import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';
import { IUserStock } from 'interfaces/stocks/IStocks';
import { IUserCrypto } from 'interfaces/crypto/ICrypto';

const calcProfits = (investmentValues: IUserInvestmentValue[]) => {
  const investmentLength = investmentValues.length;
  const lastTwoInvestments = investmentValues.slice(investmentLength-2);
  const status = lastTwoInvestments[0].value <= lastTwoInvestments[1].value ? 'increased' : 'decreased';
  const value = Math.abs(lastTwoInvestments[0].value - lastTwoInvestments[1].value).toFixed(2);
  
  return { status, value };
};

const getAssetsInProfit = (stocks: IUserStock[], crypto: IUserCrypto[]) => {
  let assetsInProfit = 0;
  let assetsBreakEven = 0;
  let assetsInLoss = 0;
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
      if(crypto.averageValuePerCrypto < crypto.details.marketValuePerCrypto) assetsInProfit++;
      else if(crypto.averageValuePerCrypto === crypto.details.marketValuePerCrypto) assetsBreakEven++;
      else assetsInLoss++;
    });
  }

  const totals = {
    assetsInProfit: (100 / noOfAssets) * assetsInProfit,
    assetsBreakEven: (100 / noOfAssets) * assetsBreakEven,
    assetsInLoss: (100 / noOfAssets) * assetsInLoss
  };

  return totals;
};

const getPieLabelsAndData = (stocks: IUserStock[], crypto: IUserCrypto[]) => {
  const labels: string[] = [];
  const quantities: number[] = [];

  if(stocks && crypto) {
    labels.push('Stock');
    labels.push('Crypto');
    let stockTotal = 0;
    let cryptoTotal = 0;

    stocks.forEach((stock: IUserStock): void => {
      labels.push(stock.details.name);
      stockTotal += stock.totalValueOfShares;
    });
    crypto.forEach(crypto => {
      labels.push(crypto.symbol);
      cryptoTotal += crypto.totalCryptoValue;
    });

    quantities.push(stockTotal, cryptoTotal);
    
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

const getBarLabelsAndData = (stocks: IUserStock[] | null, crypto: IUserCrypto[] | null) => {
  const labels: string[] = [];
  const entryPrice: number[] = [];
  const marketPrice: number[] = [];

  if(stocks) {
    stocks.forEach((stock: IUserStock): void => {
      labels.push(stock.symbol);
      entryPrice.push(stock.entryValuePerShare);
      marketPrice.push(stock.details.marketValuePerShare);
    });
  } 
  if(crypto) {
    crypto.forEach((crypto: IUserCrypto): void => {
      labels.push(crypto.symbol);
      entryPrice.push(crypto.averageValuePerCrypto);
      marketPrice.push(crypto.details.marketValuePerCrypto);
    });
  } 

  return { labels, entryPrice, marketPrice };
};

export {
  calcProfits,
  getAssetsInProfit,
  getPieLabelsAndData,
  getBarLabelsAndData
};