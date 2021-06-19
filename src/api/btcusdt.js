const service = require("./../service");

const btcusdt = () =>
  service("btcusdt", (response, send) => {
    const { lastPrice } = response;
    const targetHighPrice = 41000;
    const targetLowPrice = 30800;

    send("btc", lastPrice, targetLowPrice, targetHighPrice);
  });

module.exports = btcusdt;
