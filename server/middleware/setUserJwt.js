const jwt = require("jsonwebtoken");
const database_credentials = require("../database/.database-credentials");

const setUserJwt = (request, response) => {
  const { username, password } = request.body;
  const jsonWebToken = jwt.sign(
    { username, password },
    database_credentials.PRIVATEKEY
  );

  response.cookie("jwt", jsonWebToken);
  response.redirect("/");
};

module.exports = { setUserJwt };
