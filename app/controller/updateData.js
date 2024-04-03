const connection = require("../config/connectDb");
const services = require("../services/index");
const singup = async (req, res) => {
  const description = req.body.dcr;
  const idPage = req.params.slug;
  const idUser = req.params.id;
  await services.upDatePage(description, idPage);
  res.redirect(`/monitor/${idUser}`);
};
module.exports = singup;
