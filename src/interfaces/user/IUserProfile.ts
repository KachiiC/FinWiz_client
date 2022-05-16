import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';
import { IStockSummary } from 'interfaces/stocks/IStocks';
import { ICryptoSummary } from 'interfaces/crypto/ICrypto';

export interface IUserProfile {
  id: number;
  sub: string;
  totalInvestmentValue: number;
  investmentValues: IUserInvestmentValue[];
  stocks: IStockSummary | null;
  cryptos: ICryptoSummary | null;
}