const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(8080, () => {
  console.log('yay! server is running on port 8080');
});
