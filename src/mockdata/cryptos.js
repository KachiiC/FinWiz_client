/* eslint-disable no-undef */
const BitCoin = {
  name: 'BitCoin',
  marketValuePerCrypto: 33625.62,
  symbol: 'BTC',
  entryValuePerCrypto: 33620.4,
  quantityOfCrypto: 0.03,
  totalCryptoValue: 1008.769,
  firstBought: '2022-04-09T09:21:00.000Z',
  lastBought: '2022-05-03T10:48:00.000Z'
};

const LiteCoin = {
  name: 'LiteCoin',
  marketValuePerCrypto: 91.401,
  symbol: 'LTC',
  entryValuePerCrypto: 90.3,
  quantityOfCrypto: 1.2,
  totalCryptoValue: 109.68,
  firstBought: '2022-03-09T09:21:00.000Z',
  lastBought: '2022-04-03T10:48:00.000Z'
};

const DogeCoin = {
  name: 'DogeCoin',
  marketValuePerCrypto: 0.124,
  symbol: 'DOGE',
  entryValuePerCrypto: 0.127,
  quantityOfCrypto: 140,
  totalCryptoValue: 17.36,
  firstBought: '2022-01-12T12:21:00.000Z',
  lastBought: '2022-01-14T12:21:00.000Z'
};

const Monero = {
  name: 'Monero',
  marketValuePerCrypto: 210.323,
  symbol: 'XMR',
  entryValuePerCrypto: 209.4,
  quantityOfCrypto: 2.5,
  totalCryptoValue: 525.8,
  firstBought: '2022-02-10T18:30:00.000Z',
  lastBought: '2022-02-18T18:30:00.000Z'
};

const Stellar = {
  name: 'Stellar',
  marketValuePerCrypto: 0.168,
  symbol: 'XLM',
  entryValuePerCrypto: 0.165,
  quantityOfCrypto: 400,
  totalCryptoValue: 67.2,
  firstBought: '2022-04-10T18:30:00.000Z',
  lastBought: '2022-05-04T10:20:00.000Z'
};

const Cryptos = {
  cryptoList: [BitCoin, LiteCoin, DogeCoin, Monero, Stellar],
  totalValueOfCrypto: 1728.817,
  numberOfDifferentCrypto: 5,
  highestInvestedCrypto: 'BitCoin',
  highestInvestedCryptoTotal: 1008.769,
  highestValuePerCrypto: BitCoin,
  lowestValuedPerCrypto: DogeCoin,
  highestQuantityCrypto: Stellar,
  lowestQuantityCrypto: BitCoin,
  newestCryptoBought: Stellar,
  oldestCryptoBought: DogeCoin,
};

module.exports = { Cryptos };