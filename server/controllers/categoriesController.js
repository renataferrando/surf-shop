const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Product.find({ category: req.params.category });
  res.json(categories);
});
const getProductsBySubCategory = asyncHandler(async (req, res) => {
  const subCategories = await Product.find({
    category: req.params.category,
    subcategory: req.params.subcategory,
  });
  res.json(subCategories);
});
module.exports = {
  getCategories,
  getProductsBySubCategory,
};
