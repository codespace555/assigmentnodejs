const express = require("express");
const app = express();
const port = 3310;
const hostname = "localhost";
app.get("/random", (req, res) => {
  res.send(JSON.stringify({random:Math.floor(Math.random() * 100)}));
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/random`);
});
