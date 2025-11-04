const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
require("dotenv").config();

const SERVICE_ACCOUNT_PATH = process.env["SERVICE_ACCOUNT_PATH"];
const FIRESTORE_DB = process.env["FIRESTORE_DB"];
const serviceAccount = require("./" + SERVICE_ACCOUNT_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FIRESTORE_DB,
});

const db = getFirestore();

const e = require("express");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const ROOT_FOLDER = "dist";

const banner = `
  <div class="banner">
    <h1>Ejemplo de banner inyectado</h1>
  </div>
  `;

app.use(cors());

app.use(express.static(path.join(__dirname, ROOT_FOLDER)));

app.use(express.json());

const objectoRetornado = {
  info: "JSON testing",
  version: "v1.0.0",
  name: "Nombre",
};
app.get("/api", (req, res) => {
  const { version, ...resto } = objectoRetornado;
  res.json(resto);
});

app.get("/api/cards/", async (req, res) => {
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

app.get("/api/version", (req, res) => {
  res.json(objectoRetornado.version);
});

app.get("/admin", (req, res) => {
  res.send(`
    <html>
    <body>
    ${banner}
    </body>
    </html>
    `);
});

/*
//TODO: clean code
app.get('/', (req, res) => {
  res.send(`
    <html>
    <body>
      ${banner}
      <h1> Probando node y express.js </h1>
      <a href="/admin">Ir al panel de administración </a>
      <ul>
        ${["manzana", "banana", "pera"].map(item => (`<li>${item}</li>`)).join("")}
      </li>
    </body>
    </html>
  `)
  })*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
