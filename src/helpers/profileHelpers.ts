export const cryptoDataHelper = (data) => {

  return data.map(crypto => {

    const { symbol, quantityOfCrypto, averageValuePerCrypto, totalCryptoValue, details } = crypto;
    const { name, marketValuePerCrypto } = details;

    return {
      symbol,
      quantityOfCrypto,
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

export const commodityDataHelpers = (data) => {
  return data.map((commodity) => {

    const { quantityOfCommoditiy, details, totalCommodityValue, averageBuyPrice } = commodity;
    // eslint-disable-next-line camelcase
    const { name, type, last_close } = details;

    return {
      name,
      type,
      quantityOfCommoditiy,
      totalCommodityValue,
      averageBuyPrice,
      // eslint-disable-next-line camelcase
      marketValuePerCommodity: last_close
    };
  });
};