const express = require("express");
const router = express.Router();
const update = require("../controller/update");
router.post("/update/:slug/idUser/:id", update);
module.exports = router;
