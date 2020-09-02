const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always run!');
  next();
})

app.use('/add-product', (req, res, next) => {
  res.send('<h1>The "Add products" page</h1>');
})

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from express.js</h1>');
})

app.listen(3000);