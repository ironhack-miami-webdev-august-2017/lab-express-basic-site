const express = require("express");

const app = express();

app.set("views", "views");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/images", (req, res, next) => {
  res.render("images");
});

app.listen(3000);
