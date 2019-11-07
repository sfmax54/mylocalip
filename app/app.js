const express = require('express');

const app = express();

app.get('/', function (req, res) {
  const xForwardedFor = req.headers['x-forwarded-for'];

  let connectionRemoteAddress;
  const originalConnectionRemoteAddress = req.connection.remoteAddress;
  if (originalConnectionRemoteAddress) {
    const regexp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    const regexpResult = regexp.exec(originalConnectionRemoteAddress);
    if (regexpResult) {
      connectionRemoteAddress = regexpResult[0];
    }
  }

  // const socketRemoveAddress = req.socket.remoteAddress;

  const ip = xForwardedFor || connectionRemoteAddress;
  res.send(ip);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
