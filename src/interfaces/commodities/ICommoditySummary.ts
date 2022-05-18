export interface ICommoditySummary {
  id: number;
  sub: string;
  commoditiesList: IUserCommodity[]; 
  totalValueOf: number;
  highestInvestedCommodity: string;
  highestValuePerCommodity: string;
}

export interface IUserCommodity {
  averageBuyPrice: number;
  details: ISingleCommodity;
  firstBought: string;
  id: number;
  lastBought: string;
  name: string;
  quantityOfCommoditiy: number;
  sub: string;
  totalCommodityValue: number;
}

export interface ISingleCommodity {
  change: number;
  change_percentage: number;
  currency: string;
  high: number;
  id: number;
  last: number;
  last_close: number;
  low: number;
  name: string;
  type: string;
}