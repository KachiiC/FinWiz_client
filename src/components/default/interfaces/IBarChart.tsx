import { IUserStock } from 'interfaces/stocks/IStocks';
import { IUserCrypto } from 'interfaces/crypto/ICrypto';

interface IBarChart {
  stocks: IUserStock[];
  crypto: IUserCrypto[];
}

export type {
  IBarChart,
};
