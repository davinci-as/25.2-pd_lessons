const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "ok" });
});

route.post("/add", (req, res) => {
  const body = req.body;
  console.log("access", body);
});

route.get("/list", (req, res) => {
  res.json({
    data: [],
  });
});

module.exports = route;
