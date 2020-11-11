const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");

app.use(express.static("frontend"));

app.listen(port);
