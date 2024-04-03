const express = require("express");
const router = express.Router();
const singup = require("../controller/singupController");
router.get("/singup", singup);
module.exports = router;
