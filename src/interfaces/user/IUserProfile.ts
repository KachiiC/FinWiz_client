import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';
import { IStockSummary } from 'interfaces/stocks/IStocks';
import { ICryptoSummary } from 'interfaces/crypto/ICrypto';
import { ICommoditySummary } from 'interfaces/commodities/ICommoditySummary';

export interface IUserProfile {
  id: number;
  sub: string;
  totalInvestmentValue: number;
  investmentValues: IUserInvestmentValue[];
  stocks: IStockSummary | null;
  cryptos: ICryptoSummary | null;
  commodities: ICommoditySummary | null
}