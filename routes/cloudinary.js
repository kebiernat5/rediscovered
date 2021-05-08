const express = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Init the express-jwt middleware
router.put("/api/cloudinary", isAuthenticated, (req, res) => {
  console.log(req.body);
  const image = req.body.url;
  const { id } = jwt.verify(req.body.token, process.env.SERVER_SECRET);
  console.log(image, id);
  db.User.findByIdAndUpdate({ _id: id }, { $addToSet: { images: image } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.post("/api/cloudinary", isAuthenticated, (req, res) => {
  console.log(req.body);
  const { id } = jwt.verify(req.body.token, process.env.SERVER_SECRET);
  db.User.findById({ _id: id })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
