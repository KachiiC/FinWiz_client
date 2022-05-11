import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';

interface IUserProfile {
  id: number;                   
  sub: string;
  totalInvestmentValue: number;
  investmentValues: IUserInvestmentValue[];
  stocks?: any;
  cryptos?: any;
}

export type {
  IUserProfile,
};
