const Product = require("../models/Product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    console.log(products);
    res.render("index", { title: "Ana Sayfa", products: products });
  });
};
