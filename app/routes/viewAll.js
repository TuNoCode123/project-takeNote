const express = require("express");
const router = express.Router();
const viewAll = require("../controller/viewAll");
router.get("/viewAll/:slug/idUser/:id", viewAll);
module.exports = router;
