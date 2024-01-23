const express = require("express");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/landing", productController.getProductsLanding);
router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductById);

module.exports = router;
