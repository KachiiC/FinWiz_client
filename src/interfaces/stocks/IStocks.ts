export interface IStockSummary {
  id: number;
  sub: string;
  currentTotalAmount: number;
  oldestStock: string;
  newestStock: string;
  stockWithMostShares: string;
  highestInvestmentStock: string;
  userStock: IUserStock[];
}

export interface IUserStock {
  id: number;
  sub: string;
  symbol: string;
  entryValuePerShare: number;
  numberOfShares: number;
  totalValueOfShares: number;
  firstBought: string;
  lastBought: string;
  details: ISingleStock;
}

export interface ISingleStock {
  id: number;
  name: string;
  symbol: string;
  marketValuePerShare: number;
}

export interface ICombinedStock {
  id: number;
  sub: string;
  symbol: string;
  entryValuePerShare: number;
  numberOfShares: number;
  totalValueOfShares: number;
  firstBought: string;
  lastBought: string;
  name: string;
  marketValuePerShare: number;
}
