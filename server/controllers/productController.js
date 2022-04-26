const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

const getProductsByGender = asyncHandler(async (req, res) => {
  const gender = await Product.find({ gender: req.params.gender });
  res.json(gender);
});
const getProductsByBrand = asyncHandler(async (req, res) => {
  const brand = await Product.find({ brand: req.params.brand });
  res.json(brand);
});

module.exports = {
  getProducts,
  getProductsById,
  getProductsByGender,
  getProductsByBrand,
};
