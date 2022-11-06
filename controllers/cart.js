const Cart = require("../models/Cart");
const Product = require("../models/Product");

module.exports.getMyCart = (req, res, next) => {
  console.log("stasrting");
  const cartProducts = [];
  Cart.fetchCart((cartData) => {
    Product.fetchAll((products) => {
      for (let cartProductId of cartData.productIds) {
        cartProducts.push(
          products.find((p) => {
            // do not forget to return keyword if u are using curly brackets on arrow func.
            return p.id === cartProductId;
          })
        );
      }
      res.render("my-cart", { cartProducts: cartProducts });
    });
    // console.log(cartProducts, "szaj"); That would be undefined as it is after async fetchAll
  });
};

module.exports.postAddToCard = (req, res, next) => {
  const pId = req.params.id;
  console.log(pId);
  Cart.addProduct(pId);
  res.redirect("/my-cart");
};
