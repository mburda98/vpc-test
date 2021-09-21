const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  console.log("hejo");
  res.send("Hello World!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
