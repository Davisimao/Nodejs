const express = require("express")
const path = require("node:path")

const app = express()

const PORT = 3000


app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"),)

app.get("/", (req, res) => {
  const title = "homepage"
  const message = "mensagem dinamica do EJS"


  res.render('index', { title, message })

})

app.listen(PORT, () => {
  console.log("Servidor Iniciado")
})