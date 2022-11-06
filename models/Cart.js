const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "cart.json");
module.exports = class Cart {
  static readCartFile(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (!err) {
        cb(JSON.parse(fileContent));
      } else {
        cb({ cartProducts: [], totalPrice: 0 });
      }
    });
  }

  static addProduct(id, price) {
    this.readCartFile((cartData) => {
      const existProduct = cartData.cartProducts.find((cp) => {
        return cp.pId === id;
      });
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        cartData.cartProducts.push({ pId: id, quantity: 1 });
      }
      cartData.totalPrice += +price;

      fs.writeFile(filePath, JSON.stringify(cartData), (err) => {
        // console.log("Error status on writing cart", err);
      });
    });
  }

  static fetchCart(cb) {
    this.readCartFile(cb);
  }
};
