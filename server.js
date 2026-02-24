require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

// using an HTML file instead of stringifying with React
app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
