const connection = require("../config/connectDb");
const services = require("../services/index");
const singup = async (req, res) => {
  const description = req.body.dcr;
  const id = req.params.slug;
  services.insertPage(description, id);
  res.redirect(`/monitor/${id}`);
};
module.exports = singup;
