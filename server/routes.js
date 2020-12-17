const express = require("express");
const passport = require("passport");

const { checkUserCredentials } = require("./middleware/checkUserCredentials");
const { setUserJwt } = require("./middleware/setUserJwt");
const { getUsername } = require("./middleware/getUsername");
const { newUser } = require("./middleware/newUser");
const { logOutUser } = require("./middleware/logOutUser");
const { request, response } = require("express");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/", express.static("frontend/homepage"));
router.use("/login", express.static("frontend/login"));

router.post("/authenticate", checkUserCredentials, setUserJwt);

router.use("/register", express.static("frontend/register"));

router.use("/username", getUsername);
router.use("/rover", express.static("frontend/rover"));

router.post("/register", newUser);
router.use(
  "/rover",
  passport.authenticate("jwt", { session: false, failureRedirect: "/login" }),
  express.static("app/rover-map")
);

router.get("/logout", logOutUser);

module.exports = router;
