const { Router } = require("express");
const { getUsernames } = require("../controllers/controller");

const indexRouter = Router();

indexRouter.get("/", getUsernames);

module.exports = indexRouter;
