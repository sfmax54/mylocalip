
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  res.send(ip);
})

app.listen(3010, function () {
  console.log('App listening on port 3010!')
})




