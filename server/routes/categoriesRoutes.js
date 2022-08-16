const express = require("express");
const router = express.Router();

const {
  getAccesories,
  getWetsuits,
  getFilteredWetsuits,
  getFilteredAccesories,
} = require("../controllers/categoriesController");

router.get("/accesories", getAccesories);
router.get("accesories/:query", getFilteredAccesories);
router.get("/wetsuits", getWetsuits);
router.get("/wetsuits/:query", getFilteredWetsuits);
// router.get("/boards", getBoards);

module.exports = router;
