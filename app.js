const express = require("express");
const app = express();
const port = 3000;
const router = require("./server/routes");

const passport = require("passport");
const cookieParser = require("cookie-parser");
const { passportConfiguration } = require("./server/passportConfiguration");

passportConfiguration();

app.use(passport.initialize());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.listen(port);
