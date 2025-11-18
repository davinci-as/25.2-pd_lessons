const express = require("express");
const db = require("../utils/db").default;

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "ok" });
});

route.post("/find", async (req, res) => {
  const uid = req.body?.uid;
  const results = db.collection("users").where("uid", "==", uid).get();
  const data = await results;
  const users = data.docs.map((doc) => {
    const uid = doc.uid;
    const data = doc.data();
    return { ...data, uid };
  });
  const [user] = users;
  if (!user) return res.json({ message: "not-found" });
  res.json({ message: "found", user });
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
