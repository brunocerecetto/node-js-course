const fs = require('fs');
const path = require('path');

const pathUtil = require('../util/path');
const filePath = path.join(pathUtil, 'data', 'products.json');

const getProductsFromFile = (callback) {
  fs.readFile(filePath, (err, fileContent) => {
    if (!err) {
      return callback([]);
    };
    callback(JSON.parse(fileContent));
  })
}

module.exports = class Product {

  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
}