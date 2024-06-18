const express = require("express")
const path = require("node:path")

const app = express()
const memory = []

const PORT = 3000


app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"),)

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  const title = "homepage"
  const message = "mensagem dinamica do EJS"


  res.render('form', { title, message })

})



app.post("/register", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  memory.push({ username, password })
  res.redirect("/usuarios")
})

app.get("/usuarios", (req, res) => {
  res.render("users", { users: memory })
})

app.listen(PORT, () => {
  console.log("Servidor Iniciado")
})