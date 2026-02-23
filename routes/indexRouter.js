const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
  res.end();
});

module.exports = indexRouter;
