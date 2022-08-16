const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).end();
  }
});

const createProduct = asyncHandler(async (req, res) => {
  let productName = req.body.productName;
  let firstImage = req.file.firstImage;
  res.send(`
      Your username is: ${productName}
      Uploaded image name is: ${firstImage}
    `);
  // const { productName } = req.body;

  // const product = new Product({
  //   productName,
  // });
  // const savedProduct = await product.save();
  // res.status(201).json(savedProduct);
});
//   let product = new Product({
//     productName: req.body.productName,
//     price: req.body.price,
//     brand: req.body.brand,
//     description: req.body.description,
//     countInStock: req.body.countInStock,
//     size: req.body.size,
//     category: req.body.category,
//     gender: req.body.gender,
//     firstImage: req.file.originalname,
//   });

//   if (product) {
//     product = await product.save();
//     res.status(201).json({ product });
//   } else {
//     res.status(400);
//     throw new Error("error");
//   }
// });

//   const {
//     productName,
//     price,
//     brand,
//     description,
//     countInStock,
//     size,
//     category,
//     subcategory,
//     gender,
//   } = req.body;

//   const product = await Product.create({
//     productName,
//     price,
//     brand,
//     description,
//     countInStock,
//     size,
//     category,
//     subcategory,
//     gender,
//   });

//   if (product) {
//     res.status(201).json({
//       productName: product.productName,
//       price: product.price,
//       brand: product.brand,
//       description: product.description,
//       countInStock: product.countInStock,
//       size: product.size,
//       category: product.category,
//       subcategory: product.subcategory,
//       gender: product.gender,
//     });
//   } else {
//     res.status(400);
//     throw new Error("error");
//   }
// });

const updateProduct = asyncHandler(async (req, res) => {
  const productToUpdate = await Product.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json({
    successMessage: "Product successfully updated",
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const productToDelete = await Product.findByIdAndDelete(
    req.params.id,
    req.body
  );
  res.json({
    successMessage: "Product successfully deleted",
  });
});

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
