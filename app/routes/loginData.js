const express = require("express");
const router = express.Router();
const loginData = require("../controller/loginDTController");
router.post("/loginData", loginData);
module.exports = router;
