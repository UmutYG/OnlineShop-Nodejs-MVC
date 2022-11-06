const express = require('express');
const bodyParser = require('body-parser');

const productRouter = require('./router/product');
const shopRouter = require('./router/shop');

const app = express();


app.use(bodyParser.urlencoded({extended : false}))
app.set('view engine', 'ejs');

app.use(productRouter);
app.use(shopRouter);




app.listen(3000);


