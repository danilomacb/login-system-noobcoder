const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/login-system-noobcoder",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connect to database");
  }
);

const User = require("./models/User");

const userInput = {
  username: "danilo",
  password: "123",
  role: "admin",
};

const user = new User(userInput);
user.save((err, document) => {
  if (err) console.log(err);

  console.log(document);
});

app.listen(5000, () => {
  console.log("express server started");
});
