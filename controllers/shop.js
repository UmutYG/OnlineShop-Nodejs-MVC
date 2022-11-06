const Product = require("../models/Product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("index", { title: "Ana Sayfa", products: products });
  });
};
