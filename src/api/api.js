const WebSocketConnector = require("./../connector/webSocketConnector");
const { binanceAdapter } = require("./../adapter");
const { sendSms } = require("./../communicator");

const api = (symbol, middleHandler) => {
  const webSocketConnector = new WebSocketConnector(symbol);

  const closeWebSocket = () => {
    webSocketConnector.close();
  };

  const send = (symbol, lastPrice, targetLowPrice, targetHighPrice) => {
    if (lastPrice < targetLowPrice) {
      sendSms(symbol, targetLowPrice, closeWebSocket);
    } else if (lastPrice > targetHighPrice) {
      sendSms(symbol, targetHighPrice, closeWebSocket);
    }
  };

  webSocketConnector.onMessage((msg) => {
    const response = binanceAdapter(msg);
    middleHandler(response, send);
  });
};

module.exports = api;
