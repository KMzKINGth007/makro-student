const express = require("express");
const productController = require("../controllers/product-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/landing", productController.getProductsLanding);
router.get("/", productController.getProducts);
router.get("/:productId", authenticate, productController.getProductById);

module.exports = router;
