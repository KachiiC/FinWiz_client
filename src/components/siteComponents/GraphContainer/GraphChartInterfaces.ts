import { IUserCrypto } from 'interfaces/crypto/ICrypto';
import { IUserInvestmentValue } from 'interfaces/investments/IUserInvestmentValues';
import { IUserStock } from 'interfaces/stocks/IStocks';

export interface IGraphContainer {
    stocks: IUserStock[];
    crypto: IUserCrypto[];
    investmentValues: IUserInvestmentValue[];
}