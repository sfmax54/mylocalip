
const express = require('express');
const app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3010, function () {
  console.log('App listening on port 3010!')
})




