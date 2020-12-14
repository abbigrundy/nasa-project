const jwt = require("jsonwebtoken");
const database_cred = require("../database/.database-cred");

const setUserJwt = (request, response) => {
  const { username, password } = request.body;
  const jsonWebToken = jwt.sign(
    { username, password },
    database_cred.PRIVATEKEY
  );

  response.cookie("jwt", jsonWebToken);
  response.redirect("/");
};

module.exports = { setUserJwt };
