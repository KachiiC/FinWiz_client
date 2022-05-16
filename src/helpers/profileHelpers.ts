export const cryptoDataHelper = (data) => {

  return data.map(crypto => {

    const { symbol, quantity, averageValuePerCrypto, totalCryptoValue, details } = crypto;
    const { name, marketValuePerCrypto } = details;

    return {
      symbol,
      quantityOfCrypto: quantity,
      averageValuePerCrypto,
      totalCryptoValue,
      name,
      marketValuePerCrypto,

    };
  });
};

export const stockDataHelpers = (data) => {
  return data.map((stock) => {

    const { symbol, entryValuePerShare, details, numberOfShares, totalValueOfShares } = stock;
    const { name, marketValuePerShare } = details;

    return {
      name,
      symbol,
      numberOfShares,
      entryValuePerShare,
      marketValuePerShare,
      totalValueOfShares
    };
  });
};