const express = require("express");

const router = express.Router();

router.use("/",express.static("frontend/homepage"));

router.use("/login", express.static("frontend/login"));

router.post("/authenticate", (req, res) => {
  // TODO:
});
router.get("/image", (req, res) => {
  res.send("This is the photo of the day");
});

router.use("/rover", express.static("frontend/mars-rover"));

module.exports = router;
