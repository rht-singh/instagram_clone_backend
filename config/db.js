const mongoose = require("mongoose");

mongoose.connect(
  process.env.mongodb,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else console.log("Mongo connected");
  }
);
