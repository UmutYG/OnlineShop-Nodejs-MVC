const express = require('express');
const bodyParser = require('body-parser');

const productRouter = require('./router/product')

const app = express();


app.use(bodyParser.urlencoded({extended : false}))
app.set('view engine', 'ejs');

app.use(productRouter.router);

app.get('/', (req, res, next) => {
    res.render('index', {title : 'Ana Sayfa', products : productRouter.products});
});

app.listen(3000);


