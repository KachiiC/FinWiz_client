interface ICryptoSummary {
  id: number;
  sub: string;
  cryptoList: IUserCrypto[];
  totalValueOf: number;
  numberOfDifferent: number;
  highestInvestedCurrency: string;
  highestValuePerCurrency: string;
  lowestValuePerCurrency: string;
  highestOwnedVolume: string;
  lowestOwnedVolume: string;
  newestBoughtCurrency: string;
  oldestBoughtCurrency: string;
}

interface IUserCrypto {
  id: number;
  sub: string;
  symbol: string; 
  quantityOfCrypto: number;
  averageValuePerCrypto: number;
  totalCryptoValue: number;
  firstBought: string;
  lastBought: string;
  details: ISingleCrypto;
}

interface ISingleCrypto {
  id: number;
  name: string;
  symbol: string;
  marketValuePerShare: number;
}

export type {
  ICryptoSummary,
  IUserCrypto,
  ISingleCrypto
};