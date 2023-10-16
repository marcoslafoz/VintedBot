const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = 3000;

app.use("/static", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(port, () => {
  console.log(`Open http://localhost:${port} in your browser`);
});
