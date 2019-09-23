const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const name = process.env.NAME || 'world';
  res.send(`hello, ${name}`);
});

app.listen(process.env.PORT || 3000);
