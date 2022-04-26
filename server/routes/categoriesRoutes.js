const express = require("express");
const router = express.Router();

const {
  getCategories,
  getProductsBySubCategory,
} = require("../controllers/categoriesController");
router.get("/:category", getCategories);
router.get("/:category/:subcategory", getProductsBySubCategory);
module.exports = router;
