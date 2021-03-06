require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

//Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Code to import Router
app.use("/places", require("./controllers/places"));
//Homepage Route
app.get("/", (req, res) => {
  res.render("home");
});

//404 Page Route
app.get("*", (req, res) => {
  res.status(404).render("error404");
});

app.listen(process.env.PORT, () => {
  console.log("Wassup");
});
