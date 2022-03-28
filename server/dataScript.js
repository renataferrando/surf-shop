const Product = require("./models/productModel.js");
const leashes = require("./data/leashes.js");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv");

dotenv.config();
const asyncHandler = require("express-async-handler");
connectDB();

const importData = asyncHandler(async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(leashes);
    console.log("data imported");
    process.exit();
  } catch (error) {
    console.error("error ocured", error);
    process.exit(1);
  }
});

importData();
