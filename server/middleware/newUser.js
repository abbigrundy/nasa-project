const { Users } = require("../database/database");

const newUser = async (request, response, next) => {
  const user = await Users.create(
    {
      username: request.body.username,
      password: request.body.password,
      email: request.body.email,
      isAdmin: true,
    },
    {
      fields: ["username", "password", "email"],
    }
  );

  response.redirect("/login");
};

module.exports = { newUser };
