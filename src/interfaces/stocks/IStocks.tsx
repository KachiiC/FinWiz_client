interface IStockSummary {
  id: number;
  sub: string;
  currentTotalAmount: number;
  oldestStock: string;
  newestStock: string;
  stockWithMostShares: string;
  highestInvestmentStock: string;
  userStock: IUserStock[];
}

interface IUserStock {
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

interface ISingleStock {
  id: number;
  name: string;
  symbol: string;
  marketValuePerShare: number;

}

export type {
  IStockSummary,
  IUserStock,
  ISingleStock
};