const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const Users = require("./models/index");
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet(), compression());

app.get("/api/v1/login", async (req, res) => {
  try {
    const { mail, pass } = req.query;
    if (!mail.length && !pass.length)
      throw new Error("Please enter your email address");
    else {
      const User = new Users({ mail, pass });
      await User.save();
      res.json({ success: true, message: "User saved successfully" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, error: err });
  }
});

app.get("/api/v1/getUser", async (req, res) => {
  try {
    const getUsers = await Users.find({});
    if (!getUsers.length)
      res.json({ success: false, message: "data not found" });
    else {
      res.json({ success: true, message: getUsers });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, error: err });
  }
});

module.exports = app;
