const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());

app.post("/send", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
