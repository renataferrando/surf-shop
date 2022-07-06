const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductsById,
  getProductsByBrand,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.get("/brand/:brand", getProductsByBrand);

module.exports = router;
