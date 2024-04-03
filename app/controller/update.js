const singup = (req, res) => {
  const description = req.body.dcr;
  const idPage = req.params.slug;
  const idUser = req.params.id;
  res.render("update", {
    dl: {
      description,
      idPage,
      idUser,
    },
  });
};
module.exports = singup;
