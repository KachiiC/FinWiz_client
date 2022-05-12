import { IUserStock } from 'interfaces/stocks/IStocks';
import { IUserCrypto } from 'interfaces/crypto/ICrypto';
import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';

interface IGenericChart {
  stocks?: IUserStock[];
  crypto?: IUserCrypto[];
  title?: string;
}

interface IGraphContainer {
  stocks: IUserStock[];
  crypto: IUserCrypto[];
  investmentValues: IUserInvestmentValue[];
}

interface ILineChart {
  investmentValues: IUserInvestmentValue[];
}

export type {
  IGenericChart,
  IGraphContainer,
  ILineChart
};