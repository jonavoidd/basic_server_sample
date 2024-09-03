const express = require("express");
const router = express.Router();
const profile = require("./profile");

router.get("/", (req, res) => {
  res.send(
    `Welcome to this server. To get started, try adding ["/firstname", "/lastname", "/age", "/schoolemail", "/mydata"] in the url`
  );
});

router.get("/firstname", (req, res) => {
  res.send(profile.fistname);
});

router.get("/lastname", (req, res) => {
  res.send(profile.lastname);
});

router.get("/age", (req, res) => {
  res.send(profile.age.toString());
});

router.get("/schoolemail", (req, res) => {
  res.send(profile.schoolEmail);
});

router.get("/mydata", (req, res) => {
  res.send(profile);
});

module.exports = router;
