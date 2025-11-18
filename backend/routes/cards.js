const express = require("express");
const { getFirestore } = require("firebase-admin/firestore");
const admin = require("firebase-admin");

const SERVICE_ACCOUNT_PATH = process.env["SERVICE_ACCOUNT_PATH"];
const FIRESTORE_DB = process.env["FIRESTORE_DB"];
const serviceAccount = require("../" + SERVICE_ACCOUNT_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIRESTORE_DB,
});

const db = getFirestore();

const route = express.Router();

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
