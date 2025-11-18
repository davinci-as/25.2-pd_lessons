const express = require("express");
const route = express.Router();
const db = require("../utils/db").default;

route.post("/add", async (req, res) => {
  const body = req.body;
  console.log("access", body);
  await db.collection("cards").add({
    ...body,
  });
  res.json({ message: "cargado correctamente" });
});

route.get("/list", async (req, res) => {
  console.log("/api/cards/", "consultado");
  const age = 26;

  const cards = await db.collection("cards").get();
  const originalCards = cards.docs.map((card) => {
    const id = card.id;
    const data = card.data();
    return {
      id,
      ...data,
    };
  });

  res.json({
    data: originalCards,
  });
});

module.exports = route;
