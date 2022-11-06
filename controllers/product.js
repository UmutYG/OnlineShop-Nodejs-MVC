const Product = require("../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { title: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  const name = req.body.productName;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(
    Math.random().toString(),
    name,
    description,
    price
  );

  product.save();
  res.redirect('/');
  
};

exports.getProductDetails = (req, res, next) => {
  const pId = req.params.id;
  Product.getById(pId, product => {
    res.render('product-details', {product : product});
  });

}

