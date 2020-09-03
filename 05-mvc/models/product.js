const fs = require('fs');
const path = require('path');

const pathUtil = require('../util/path');

const filePath = path.join(pathUtil, 'data', 'products.json');

module.exports = class Product {

  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      };
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(filePath, (err, fileContent) => {
      if (!err) {
        callback([]);
      };
      callback(JSON.parse(fileContent));
    })
  }
}