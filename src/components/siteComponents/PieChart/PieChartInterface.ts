import { IUserCrypto } from 'interfaces/crypto/ICrypto';
import { IUserStock } from 'interfaces/stocks/IStocks';

export interface IGenericChart {
    stocks?: IUserStock[];
    crypto?: IUserCrypto[];
    title?: string;
}