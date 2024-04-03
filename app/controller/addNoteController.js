const login = (req, res) => {
  res.render("page", { paramUser: req.params.slug });
};
module.exports = login;
