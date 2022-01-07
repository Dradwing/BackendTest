const express = require("express");

const userRoutes = express.Router();

userRoutes.route("/").get((req, res) => {
  res.send("Hellp this time working?");
});

module.exports = userRoutes;
