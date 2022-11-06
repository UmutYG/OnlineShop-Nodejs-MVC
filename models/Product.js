const path = require("path");

const fs = require("fs");

const filePath = path.join(__dirname, "..", "data", "products.json");

module.exports = class Product {
  constructor(id = "", name = "", description = "", price = "") {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        console.log("No error");
        products = JSON.parse(fileContent);
      } else {
        console.log("Error");
        products = [];
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        // still prints error without error
      });
    });
  }

 static fetchAll(cb) {
  return fs.readFile(filePath, (err, fileContent)=> {
    if(!err) {
      // do not forget to
      cb(JSON.parse(fileContent));
    }
  })
 }
};
