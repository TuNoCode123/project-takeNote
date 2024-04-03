const express = require("express");
const router = express.Router();
const addNoteController = require("../controller/addNoteController");
router.get("/addNote/:slug", addNoteController);
module.exports = router;
