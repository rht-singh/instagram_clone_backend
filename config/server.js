const http = require("http");

module.exports = function (app) {
  try {
    const server = http.createServer(app);
    return { server, io: null };
  } catch (err) {
    console.log(err);
  }
};
