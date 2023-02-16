const express = require("express");
const bodyparser = require("body-parser");
const mongo = require("mongoose");
const cors = require("cors");

const User = require("./route/auth");
const Product = require("./route/product");

const app = express();

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.use("/api", User);
app.use("/product", Product);

app.listen(4000, (req, res) => {
  console.log("Server started on port 4000");
});
