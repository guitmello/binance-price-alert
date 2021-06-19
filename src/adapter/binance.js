const binanceAdapter = (msg) => {
  return {
    eventType: msg.e,
    eventTime: msg.E,
    symbol: msg.s,
    priceChange: Number(msg.p),
    priceChangePercent: `${msg.P}%`,
    weightedAveragePrice: Number(msg.w),
    firstTradePrice: Number(msg.x),
    lastPrice: Number(msg.c),
    lastQuantity: Number(msg.Q),
    bestBidPrice: Number(msg.b),
    bestBidQuantity: Number(msg.B),
    bestAskPrice: Number(msg.a),
    bestAskQuantity: Number(msg.A),
    openPrice: Number(msg.o),
    highPrice: Number(msg.h),
    lowPrice: Number(msg.l),
    totalTradedBaseAssetVolume: Number(msg.v),
    totalTradedQuoteAssetVolume: Number(msg.q),
    statisticsOpenTime: msg.O,
    statisticsCloseTime: msg.C,
    firstTradeID: msg.F,
    lastTradeID: msg.L,
    totalNumberOfTrades: msg.n,
  };
};

module.exports = binanceAdapter;
