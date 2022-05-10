/* eslint-disable no-undef */
const Apple = {
  name: 'Apple Inc',
  markeValuePerShare: 157.28,
  symbol: 'AAPL',
  entryValuePerShare: 156.2,
  numberOfShares: 10,
  totalValueOfShares: 1572.8,
  firstBought: '2022-04-06T09:21:00.000Z',
  lastBought: '2022-05-03T11:21:00.000Z'
};

const Facebook = {
  name: 'Meta Platforms Inc - Class A',
  markeValuePerShare: 203.77,
  symbol: 'FB',
  entryValuePerShare: 204.35,
  numberOfShares: 5,
  totalValueOfShares: 1018.85,
  firstBought: '2021-12-06T09:21:00.000Z',
  lastBought: '2022-02-10T14:30:00.000Z'
};

const Tesla = {
  name: 'Tesla Inc',
  markeValuePerShare: 865.65,
  symbol: 'TSLA',
  entryValuePerShare: 868,
  numberOfShares: 3,
  totalValueOfShares: 2596.95,
  firstBought: '2022-01-06T14:45:00.000Z',
  lastBought: '2022-02-04T14:45:00.000Z'
};

const Microsoft = {
  name: 'Microsoft Corporation',
  markeValuePerShare: 274.73,
  symbol: 'MSFT',
  entryValuePerShare: 274.88,
  numberOfShares: 6,
  totalValueOfShares: 1648.38,
  firstBought: '2022-03-15T13:30:00.000Z',
  lastBought: '2022-04-15T11:30:00.000Z'
};

const Google = {
  name: 'Alphabet Inc - Class C',
  markeValuePerShare: 2313.2,
  symbol: 'GOOG',
  entryValuePerShare: 2316.23,
  numberOfShares: 2,
  totalValueOfShares: 4626.4,
  firstBought: '2022-04-07T10:30:00.000Z',
  lastBought: '2022-04-07T10:30:00.000Z'
};

const Stocks = {
  stocksList: [Apple, Facebook, Tesla, Microsoft, Google, Apple, Facebook, Tesla, Microsoft, Google, Apple, Facebook, Tesla, Microsoft, Google],
  totalValueOfStocks: 11463.38,
  numberOfDifferentStocks: 5,
  oldestStock: Facebook,
  newestStock: Google,
  stockWithMostShares: Apple,
  numberOfMostShares: 10,
  highestInvestmentTotal: 4626.4,
  highestValueStockPrice: 2313.2,
  lowestValueStockPrice: 157.28,
};

module.exports = { Stocks };