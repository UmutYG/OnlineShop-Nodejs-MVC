const Cart = require("../models/Cart");
const Product = require("../models/Product");

module.exports.getMyCart = (req, res, next) => {
  const cartProductsList = [];
  Cart.fetchCart((cartData) => {
    Product.fetchAll((products) => {
      for (let cartProduct of cartData.cartProducts) {
        const pWithoutQuantity = products.find((p) => {
          // do not forget to return keyword if u are using curly brackets on arrow func.
          return p.id === cartProduct.pId;
        });
        const pWithQuantity = {
          ...pWithoutQuantity,
          quantity: cartProduct.quantity,
        };
        cartProductsList.push(pWithQuantity);
      }
      res.render("my-cart", { cartProducts: cartProductsList, totalPrice : cartData.totalPrice });
    });
    // console.log(cartProducts, "szaj"); That would be undefined as it is after async fetchAll
  });
};

module.exports.postAddToCard = (req, res, next) => {
  const pId = req.body.id;
  const price = req.body.price;
  Cart.addProduct(pId, price);
  res.redirect("/my-cart");
};
