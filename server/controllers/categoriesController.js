const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getAccesories = async (req, res) => {
  const accesories = await Product.find({
    category: "accesories",
    ...req.query,
  });
  res.json(accesories);
};
// const getBoards = asyncHandler(async (req, res) => {
//   const accesoriesByBrand = await Product.find({
//     category: "boards",
//     brand: req.params.brand,
//   });
//   res.json(accesoriesByBrand);
// });

// const getWetsuits = asyncHandler(async (req, res) => {
//   const wetsuits = await Product.find();
//   res.json(wetsuits);
// });

module.exports = {
  getAccesories,
  // getWetsuits,
  // getBoards,
};
