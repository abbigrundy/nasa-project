const express = require("express");

const router = express.Router();

router.use(express.static("frontend"));
// router.use(express.static("frontend/login.html"));
router.use("/login", express.static("frontend/login.html"));

router.get("/", (req, res) => {
  res.send();
});

router.get("/image", (req, res) => {
  res.send("This is the photo of the day");
});

module.exports = router;
