const express = require("express");
const root = express.Router();

root.get("/", (req, res) => {
  console.log("this is inside root.js file");
  res.json("hello this is kishor......inside root js file");
});

module.exports = root;
