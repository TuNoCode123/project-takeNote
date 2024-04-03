const connection = require("../config/connectDb");
const services = require("../services/index");
const login = async (req, res) => {
  const email = req.body.email;
  const pw = req.body.passWord;
  const results = await services.findAllPage();
  for (let i = 0; i < results.length; i++) {
    if (email.includes(results[i].email) && pw.includes(results[i].passWord)) {
      res.render("interface", { userId: JSON.stringify(results[i].id) });
      return;
    }
  }
  res.redirect("/login");
};
module.exports = login;
