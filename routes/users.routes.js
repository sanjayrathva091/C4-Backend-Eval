const express = require("express");
const userLogin = require("../controllers/userLogin.ctrl");
const userRegister = require("../controllers/userRegister.ctrl");
const { authentication } = require("../middlewares/authentication");
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", [authentication], userLogin);

module.exports = userRouter;