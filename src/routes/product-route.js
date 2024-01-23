const express = require("express")

const router = express.Router();

router.get("/landing", productController.getProductsLanding)
router.get("/", productController.getProducts)
router.get("/:productId", productController.getProductById)

module.express = router;

