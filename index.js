const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ message: "Olá" });
});

app.listen(3333);
