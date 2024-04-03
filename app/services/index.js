const db = require("../models/index");
const insertUser = async (email, pass, rpw, name) => {
  await db.User.create({
    email: email,
    passWord: pass,
    repeatPass: rpw,
    userName: name,
    type: "freezeTableName",
  });
};
const insertPage = async (description, id) => {
  await db.Page.create({
    description: description,
    userId: id,
  });
};
const findPage = async (id) => {
  const results = await db.Page.findAll({
    where: {
      userId: id,
    },
    include: [db.User],
    raw: true,
    nest: true,
  });
  return results;
};
const upDatePage = async (description, idPage) => {
  await db.Page.update(
    {
      description: description,
    },
    {
      where: {
        id: idPage,
      },
    }
  );
};
const deletePage = async (id) => {
  db.Page.destroy({
    where: {
      id: id,
    },
  });
};
const findAllPage = async () => {
  // const [results] = await connection.query("select * from user");
  const results = db.User.findAll({
    raw: true,
  });
  return results;
};
const findOne = async (id) => {
  // const [results] = await connection.query("select * from user");
  const results = db.Page.findOne({
    where: {
      id: id,
    },
    raw: true,
  });
  return results;
};
module.exports = {
  insertUser,
  insertPage,
  findPage,
  upDatePage,
  deletePage,
  findAllPage,
  findOne,
};
