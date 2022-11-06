const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "cart.json");
module.exports = class Cart {
  static readCartFile(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (!err) {
        cb(JSON.parse(fileContent));
      } else {
        cb({ productIds: [], totalPrice: 0 });
      }
    });
  }

  static addProduct(id) {
    this.readCartFile((data) => {
      data.productIds.push(id);
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        console.log("Error status on writing cart", err);
      });
    });
  }

  static fetchCart(cb) {
    this.readCartFile(cb);
  }
};
