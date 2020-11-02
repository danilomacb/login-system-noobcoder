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

app.listen(5000, () => {
  console.log("express server started");
});
