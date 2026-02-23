const path = require("node:path");
const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../form.html"));
});

newRouter.post("/", (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.end();
});

module.exports = newRouter