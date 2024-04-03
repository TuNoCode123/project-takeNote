const express = require("express");
const path = require("path");
const conFigViewEn = (app) => {
  app.set("views", path.join("app", "view"));
  app.set("view engine", "ejs");
  app.use(express.static(path.join("app", "public")));
};
module.exports = conFigViewEn;
