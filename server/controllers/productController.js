const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProducts = async (req, res) => {
  const { limit, offset } = req.query;

  // const max = limit || 20;
  const products = await Product.find();
  res.json(products);
  // if (limit) {
  //   res.json({
  //     limit,
  //     offset,
  //   });
  // } else {
  //   res.json(products);
  // }
};
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

const getProductsByBrand = asyncHandler(async (req, res) => {
  const brand = await Product.find({ brand: req.params.brand });
  res.json(brand);
});

module.exports = {
  getProducts,
  getProductsById,
  getProductsByBrand,
};
