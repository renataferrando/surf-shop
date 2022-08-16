const express = require("express");
const router = express.Router();
const upload = require("../middlewares/imageUpload");

const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.post("/", upload.single("firstImage"), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
