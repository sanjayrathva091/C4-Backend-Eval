const express = require("express");
const createPost = require("../controllers/createPost.ctrl");
const deletePost = require("../controllers/deletePost.ctrl");
const fetchPosts = require("../controllers/fetchPosts.ctrl");
const updatePost = require("../controllers/updatePost.ctrl");
const { authorization } = require("../middlewares/authorization");
const postsRouter = express.Router();

postsRouter.get("/", [authorization], fetchPosts);

postsRouter.post("/create", [authorization], createPost);

postsRouter.patch("/update/post/:_id", [authorization], updatePost);

postsRouter.delete("/delete/post/:_id", [authorization], deletePost);

module.exports = postsRouter;