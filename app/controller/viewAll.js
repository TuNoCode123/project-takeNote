const connection = require("../config/connectDb");
const services = require("../services/index");
const singup = async (req, res) => {
  const idPage = req.params.slug;
  const idUser = req.params.id;
  const results = await services.findOne(idPage);
  res.render("viewAll", { pageData: { results, idUser } });
};
module.exports = singup;
