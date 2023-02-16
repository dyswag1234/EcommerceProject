const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const mongo = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const user = require("../model/user");

mongo.set("strictQuery", false);
mongo
  .connect(
    "mongodb+srv://vandy:khmergamer@cluster0.63zqaij.mongodb.net/User?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Erro" + err);
  });

route.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) {
      res.status(500).send(err);
    } else if (existingUser) {
      res.status(409).json({
        message: "User with this email already exists",
      });
    } else {
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      user.save((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).json({
            message: "User created",
          });
        }
      });
    }
  });
});

route.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //update user's isLoggedIn status
        User.updateOne(
          { _id: user._id },
          { $set: { isLoggedIn: true } },
          (err, updatedUser) => {
            if (err) {
              res.status(500).send(err);
            } else {
              const token = jwt.sign({ email: user.email }, "secret", {
                expiresIn: "7200",
              });
              res.json({
                message: "Login succesfully",
                token: token,
              });
              localStorage.setItem("token", res.data.token);
            }
          }
        );
      } else {
        res.status(401).json({
          message: "Auth failed",
        });
      }
    }
  });
});

route.get("/user", (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).json({
        message: "User retrieved successfully",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving users",
        err: err,
      });
    });
});

module.exports = route;
