const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const date = require(__dirname + "/date.js");

const Items = ["Buy Food", "CookFood"];
const workItems = ["time to work !"];
app.set("view engine", "ejs"); // setting up the rmplating engine to ejs

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: Items });
});
app.post("/", (req, res) => {
  console.log(req.body);
  let item = req.body.nextItem;
  if (req.body.list === "WorkList") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    Items.push(item);
    res.redirect("/");
  }
});
//adding a work route

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "WorkList", newListItems: workItems });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
