const express = require("express");

const router = express.Router();

router.use(express.static("frontend"));

router.use("/login", express.static("frontend/login.html"));


router.get("/image", (req, res) => {
  res.send("This is the photo of the day");
});

router.get("/rover", (req, res) => {
  res.send("Rover Page");
});

module.exports = router;
