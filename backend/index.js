const express = require('express')
const app = express()
const port = 3000

const banner = `
  <div class="banner">
    <h1>Ejemplo de banner inyectado</h1>
  </div>
  `

app.get('/admin', (req, res) => {
  res.send(`
    <html>
    <body>
    ${banner}
    </body>
    </html>
    `)
});

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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
