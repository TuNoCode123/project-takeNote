const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
require("dotenv").config();
const router = require("./routes/index");
const configViewEn = require("./config/conFigViewEngine");
const port = process.env.PORT;
router(app);
configViewEn(app);
app.listen(port, () => {
  console.log(`app run on the ${port}`);
});
