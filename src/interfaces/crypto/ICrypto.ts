export interface ICryptoSummary {
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

export interface IUserCrypto {
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

export interface ISingleCrypto {
  marketValuePerCrypto: number;
  id: number;
  name: string;
  symbol: string;
}

export interface ICombinedCrypto {
  id: number;
  sub: string;
  symbol: string;
  quantityOfCrypto: number;
  averageValuePerCrypto: number;
  totalCryptoValue: number;
  firstBought: string;
  lastBought: string;
  name: string;
  marketValuePerCrypto: number;
}
