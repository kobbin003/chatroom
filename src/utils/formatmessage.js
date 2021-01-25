const moment = require("moment");
// const time = moment().format("hh:mm:ss a");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("hh:mm:ss a"),
  };
}

module.exports = formatMessage;
