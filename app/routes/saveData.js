const express = require("express");
const router = express.Router();
const checkController = require("../controller/checkController");
router.post("/saveData", checkController);
module.exports = router;
