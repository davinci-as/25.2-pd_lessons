require("dotenv").config();

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

app.use("/api/cards", require("./routes/cards"));
app.use("/api/users", require("./routes/users"));

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
