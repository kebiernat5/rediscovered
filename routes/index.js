const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");
const errorMiddleware = require("./errorMiddleware");
const stateRouter = require("./state")

router.use(authRouter, usersRouter, errorMiddleware, stateRouter);
module.exports = router;