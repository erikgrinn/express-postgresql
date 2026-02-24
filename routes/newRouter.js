const path = require("node:path");
const { Router } = require("express");
const { getUsernames, createUsernameGet, createUsernamePost } = require("../controllers/controller");

const newRouter = Router();

newRouter.get("/", createUsernameGet);

newRouter.post("/", createUsernamePost);

module.exports = newRouter;
