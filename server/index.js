const express = require("express");
const path = require("path");
const app = express();

const buildPath = path.join(__dirname, "..", "build");

app.use(express.json());
app.use(express.static(buildPath));

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/send", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
