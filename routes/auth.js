const express = require("express");
const auth = require("../config/auth");
const db = require("../models");

const router = express.Router();

router.post("/api/login", (req, res) => {
  console.log("hello")
  auth
    .logUserIn(req.body.email, req.body.password)
    .then((dbUser) => res.json(dbUser))
    .catch((err) => res.status(400).json(err));
});

router.post("/api/signup", (req, res) => {
  console.log(req.body)
  db.User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
