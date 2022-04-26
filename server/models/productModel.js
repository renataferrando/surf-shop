const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  firstImageUrl: {
    type: String,
    required: true,
  },
  secondImageUrl: {
    type: String,
  },
  size: [
    {
      type: Number,
    },
  ],
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
