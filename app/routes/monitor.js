const express = require("express");
const router = express.Router();
const monitorPage = require("../controller/monitorPage");
router.get("/monitor/:slug", monitorPage);
module.exports = router;
