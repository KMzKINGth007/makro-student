const express = require("express");
const adminController = require("../controllers/admin-controller");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post(
  "/product",
  upload.array("images", 5),
  adminController.createProduct
);
router.patch("/product/:productId", adminController.updateProduct);

router.post("/category", adminController.createCategory);

router.post("/brand", adminController.createBrand);

router.post("/promotion", adminController.createPromotion);

module.exports = router;
