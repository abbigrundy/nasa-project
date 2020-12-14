const { Users } = require("../database/database");

const checkUserCredentials = (request, response, next) => {
  const { username, password } = request.body;

  Users.findAll({
    where: {
      username: username,
      password: password,
    },
  })
    .then((databaseResponse) => {
      if (databaseResponse[0]) {
        return next();
      } else {
        response.redirect("/login");
      }
    })
    .catch((error) => {
      console.log(error);
      throw Error(error);
    });
};

module.exports = { checkUserCredentials };