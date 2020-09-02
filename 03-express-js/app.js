// node modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//helpers
const rootDir = require('./helpers/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);

