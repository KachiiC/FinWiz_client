/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { Cryptos } = require('./cryptos');
const { Stocks } = require('./stocks');

const User = {
  name: 'John Doe',
  email: 'John.Doe@hotmail.com',
  investments: {
    currentTotalAmount: 10,
    investmentAmounts: [5, 5],
    currentTotalValue: 13192.2, // Stocks + Crypto
    investmentValues: [1008.769, 109, 681, 17.36, 525.81, 67.2, 1572.8, 1018.85, 2596.95, 1648.38, 4626.4], // 5 Crypto and 5 Stocks
    stock: Stocks,
    crypto: Cryptos
  },
  dateJoined: '2021-12-05T09:21:00.000Z'
};

module.exports = { User };