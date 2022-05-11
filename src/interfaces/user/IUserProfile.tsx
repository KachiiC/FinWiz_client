import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';
import { IUserStock } from 'interfaces/stocks/IStocks';
import { IUserCrypto } from 'interfaces/crypto/Icrypto';

interface IUserProfile {
  id: number;                   
  sub: string;
  totalInvestmentValue: number;
  investmentValues: IUserInvestmentValue[];
  stocks: IUserStock[];
  cryptos: IUserCrypto[];
}

export type {
  IUserProfile,
};
