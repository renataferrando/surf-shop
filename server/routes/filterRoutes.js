const express = require("express");
const router = express.Router();

const {
  getByFilter,
  getByFilterGet,
} = require("../controllers/filterController");

router.post("/filter", getByFilter);
router.get("/query", getByFilterGet);

module.exports = router;
