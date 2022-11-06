const express = require("express");

const cartController = require("../controllers/cart");
const router = express.Router();

router.get("/my-cart", cartController.getMyCart);
router.post("/addtocart", cartController.postAddToCard);

module.exports = router;
