
const express = require('express');

const data = require('../app');
const products = ["dsşal", "dafa"];

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title : 'Add Product'});
});

router.post('/add-product', (req, res, next) => {
    console.log(data, 'is dataaa');
    products.push({ title : req.body.productName});
});

exports.router = router;
exports.products = products;

