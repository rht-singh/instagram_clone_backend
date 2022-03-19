const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://not7that:not7that@cluster0.k4qor.mongodb.net/instagram?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else console.log("Mongo connected");
  }
);
