const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  const users = ["kishor", "keerthannaa", "105", "104"];
  res.json(users);
});

router.get("/hello", (req, res) => {
  console.log("this is inside api.js");
  res.json("hello this is kishor kumar");
});

module.exports = router;
