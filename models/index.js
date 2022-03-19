const mongoose = require("mongoose");

const User = mongoose.Schema({
  mail: {
    type: String,
  },
  pass: {
    type: String,
  },
});

const Users = new mongoose.model("users", User);
module.exports = Users;
