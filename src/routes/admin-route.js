const express = require("express")

const route = express.Router()

router.post("/product", adminControllers.createProduct)
router.patch("/product/:productId", adminControllers.updateProduct)

router.post("/category", adminControllers.createCategory)

router.post("/brand", adminControllers.createBrand)

router.post("/promotion", adminControllers.createPromotion)

module.exports = router