const express = require("express");
const path = require("path");
const app = express();
const transporter = require("./config.js");

const buildPath = path.join(__dirname, "..", "build");

app.use(express.json());
app.use(express.static(buildPath));

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: `<p>You have a new connect request</p>
      <h3>Contact details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>`,
    };

    transporter.sendMail()
  } catch (error) {
    res.status(500);
    res.send({
      sucess: false,
      message: 'Something went wrong.Please try again'
    });
  }
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
