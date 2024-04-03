const express = require("express");
const router = express.Router();
const updateData = require("../controller/updateData");
router.post("/updateData/:slug/idUser/:id", updateData);
module.exports = router;
