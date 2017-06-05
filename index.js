const express = require('express');
const app = express();
app.use(express.static('app/libs'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/portfolio', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function () {
  console.log('Site listening on port 3000!')
});
