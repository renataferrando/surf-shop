const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getAccesories = async (req, res) => {
  const accesories = await Product.find({
    category: "accesories",
    ...req.query,
  });
  res.json(accesories);
};

const getWetsuits = asyncHandler(async (req, res) => {
  const wetsuits = await Product.find({ category: "wetsuit" });
  res.json(wetsuits);
});
const getFilteredAccesories = asyncHandler(async (req, res) => {
  const filteredAccesories = await Product.find({ ...req.query });
  res.json(filteredAccesories);
});

const getFilteredWetsuits = asyncHandler(async (req, res) => {
  const filteredWetsuits = await Product.find({ ...req.query });
  res.json(filteredWetsuits);
});

module.exports = {
  getAccesories,
  getWetsuits,
  getFilteredWetsuits,
  getFilteredAccesories,
};
