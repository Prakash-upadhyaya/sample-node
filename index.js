const express = require("express");
const app = express();
require("dotenv/config");

const { PORT } = process.env;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ id: 1, name: "abc" });
});

app.listen(PORT, () => {
  console.log("Running on port ", PORT);
});
