const express = require("express");
const router = express.Router();
const deleteData = require("../controller/deleteData");
router.get("/delete/:slug/idUser/:id", deleteData);
module.exports = router;
