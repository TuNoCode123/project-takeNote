const connection = require("../config/connectDb");
const services = require("../services/index");
const singup = async (req, res) => {
  const idPage = req.params.slug;
  const idUser = req.params.id;
  services.deletePage(idPage);
  res.redirect(`/monitor/${idUser}`);
};
module.exports = singup;
