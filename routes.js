const express = require("express");
const router = express.Router();
const profile = require("./profile");

router.get("/firstname", (req, res) => {
  res.send(profile.fistname);
});

router.get("/lastname", (req, res) => {
  res.send(profile.lastname);
});

router.get("/age", (req, res) => {
  res.send(profile.age);
});

router.get("/school-email", (req, res) => {
  res.send(profile.schoolEmail);
});

router.get("/my-data", (req, res) => {
  res.send(profile);
});

module.exports = router;
