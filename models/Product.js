const path = require("path");

const fs = require("fs");

const filePath = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = (callback) => {
  return fs.readFile(filePath, (err, fileContent) => {
    if (!err) {
      // do not forget to
      callback(JSON.parse(fileContent));
    } else {
      callback([]);
    }
  });
};

module.exports = class Product {
  constructor(id = "", name = "", description = "", price = "") {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        // still prints error without error
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
