const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const errorMiddleware = require("./errorMiddleware");
const stateRouter = require("./state");
const cloudinary = require("./cloudinary");
const Image = require("./image")

router.use(authRouter, usersRouter, errorMiddleware, stateRouter, cloudinary, Image);
module.exports = router;
