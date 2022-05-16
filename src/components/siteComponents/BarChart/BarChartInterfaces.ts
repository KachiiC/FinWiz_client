import { IUserStock } from 'interfaces/stocks/IStocks';
import { IUserCrypto } from 'interfaces/crypto/ICrypto';
import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';

export interface IGenericChart {
    stocks?: IUserStock[];
    crypto?: IUserCrypto[];
    title?: string;
}

export interface IGraphContainer {
    stocks: IUserStock[];
    crypto: IUserCrypto[];
    investmentValues: IUserInvestmentValue[];
}

export interface ILineChart {
    investmentValues: IUserInvestmentValue[];
}
