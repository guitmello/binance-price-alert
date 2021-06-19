const WebSocket = require("ws");

const WebSocketConnector = function (symbol) {
  this.baseUrl = "wss://stream.binance.com:9443/ws/";
  this.webSocketUrl = `${this.baseUrl}${symbol}@ticker`;
  this.socket = new WebSocket(this.webSocketUrl);

  this.socket.on("open", () => {
    console.log(`Connected to websocket server at: ${this.webSocketUrl}`);
  });

  this.socket.onclose = () => {
    console.log(
      `Disconnected from the websocket server at: ${this.webSocketUrl}`
    );
  };

  this.onMessage = (onMessageReceived) => {
    this.socket.on("message", (msg) => {
      onMessageReceived(JSON.parse(msg));
    });
  };

  this.close = () => {
    if (this.socket) {
      this.socket.close();
    }
  };
};

module.exports = WebSocketConnector;
