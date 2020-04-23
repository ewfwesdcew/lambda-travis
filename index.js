const express = require("express");
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => res.send("Hello World! from production"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
