const connection = require("../config/connectDb");
const services = require("../services/index");
const singup = async (req, res) => {
  const id = req.params.slug;
  const results = await services.findPage(id);
  res.render("muntiplePage", {
    kq: {
      results,
      id,
    },
  });
};
module.exports = singup;
