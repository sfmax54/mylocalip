
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  const xForwardedFor = req.headers['x-forwarded-for'];

  let connectionRemoteAddress = req.connection.remoteAddress;
  if (connectionRemoteAddress) {
    const regexp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    connectionRemoteAddress = regexp.exec(connectionRemoteAddress);
  }

  // const socketRemoveAddress = req.socket.remoteAddress;

  var ip = xForwardedFor || connectionRemoteAddress;
  res.send(ip);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
