const express = require("express")

const app = express()

app.get("/", (req, res) => res.json({ id: 1 }))

app.listen(3000, () => console.log("Rodando servidor no http://localhost:3000"))