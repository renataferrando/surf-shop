const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getByFilter = async (req, res) => {
  const { type, query } = req.body;
  try {
    let products;

    switch (type) {
      case "text":
        products = await Product.find({ $text: { $search: query } });
        break;
      case "filters":
        products = await Product.find({
          $or: [{ subcategory: query }, { brand: query }, { gender: query }],
        });
        break;
    }
    if (!products.length > 0) {
      products = await Product.find({ category: "accesories" });
    }

    res.json({ products });
  } catch (err) {
    console.log(err);
  }
};

const getByFilterGet = async (req, res) => {
  const product = await Product.find({
    ...req.query,
  });
  res.json(product);
};

module.exports = {
  getByFilter,
  getByFilterGet,
};
