const express = require("express");
const app = express();
const port = 3300;
const hostname = "localhost";
app.get("/", (req, res) => {
  res.send(JSON.stringify({msg:`I am homepage`}));
});
app.get("/about", (req, res) => {
  res.send(JSON.stringify({msg:`I am about page`}));
});
app.get("/contact", (req, res) => {
  res.send(JSON.stringify({emai:"suppor@pwskills.com"}));
});
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
