const logOutUser = (request, response, done) => {
  try {
    request.logOut();
    response.redirect("/");
    done(null, false);
  } catch (error) {
    done(error);
  }
};

module.exports = { logOutUser };
