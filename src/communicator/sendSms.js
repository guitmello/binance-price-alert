const Nexmo = require("nexmo");

const sendSms = (symbol, price, closeWebSocket) => {
  const nexmo = new Nexmo({
    apiKey: process.env.SMS_API_KEY,
    apiSecret: process.env.SMS_API_SECRET,
  });

  const msg = `${symbol} reached the expected price: $ ${price}`;

  nexmo.message.sendSms(
    process.env.PHONE_NUMBER,
    process.env.PHONE_NUMBER,
    msg,
    { type: "unicode" },
    (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
        const data = {
          id: res.messages[0]["message-id"],
          number: res.messages[0]["to"],
        };

        console.log("SMS MESSAGE: ", data);
        return closeWebSocket();
      }
    }
  );
};

module.exports = sendSms;
