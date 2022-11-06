const express = require("express");

const cartController = require("../controllers/cart");
const router = express.Router();

router.get("/my-cart", cartController.getMyCart);
router.get("/addtocart/:id", cartController.postAddToCard);

module.exports = router;
