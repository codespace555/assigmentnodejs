const express = require("express");
const app = express();
const port = 3320;
const hostname = "localhost";
let counter = 0;
app.use(express.json());
app.get("/", (req, res) => {
  res.send(JSON.stringify({ "counter":counter }));
});
  app.get('/increment', (req, res) => {
    counter++;
    res.send(JSON.stringify({ "counter":counter }));
  });
  app.get('/decrement', (req, res) => {
    counter--;
    res.send(JSON.stringify({ "counter":counter }));
  });
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
