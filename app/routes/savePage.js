const express = require("express");
const router = express.Router();
const savePageController = require("../controller/savePageController");
router.post("/savePage/:slug", savePageController);
module.exports = router;
