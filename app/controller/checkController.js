const connection = require("../config/connectDb");
const services = require("../services/index");
const d = async (req, res) => {
  const { email, pass, rpw, name } = req.body;
  if (pass != rpw) {
    return res.send("faild");
  }
  await services.insertUser(email, pass, rpw, name);
  res.redirect("/");
};
module.exports = d;
