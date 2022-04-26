const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductsById,
  getProductsByGender,
  getProductsByBrand,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.get("/gender/:gender", getProductsByGender);
router.get("/brand/:brand", getProductsByBrand);

module.exports = router;
