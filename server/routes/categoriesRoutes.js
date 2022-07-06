const express = require("express");
const router = express.Router();

const {
  getAccesories,
  getWetsuits,
  getBoards,
} = require("../controllers/categoriesController");
router.get("/accesories", getAccesories);
// router.get("/wetsuits", getWetsuits);
// router.get("/boards", getBoards);

module.exports = router;
