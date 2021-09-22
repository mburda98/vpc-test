const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  console.log("hejo");
  res.send("Hello World from auto docker!!!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`);
});
