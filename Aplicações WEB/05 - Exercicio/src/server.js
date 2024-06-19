const express = require("express")
const path = require("node:path")

const PORT = 3000
const app = express()
const memory = []


app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")/* fala pro express que os arquivos de visão seram de extensao ejs */
app.set("views", path.join(__dirname, "views"))



app.listen(PORT, () => {
  console.log("Servidor iniciado - https://localhost:3000")

})

app.get("/", (req, res) => {
  res.render("cadastro")
})


app.post("/register", (req, res) => {
  const username = req.body.username
  const email = req.body.email

  memory.push({ email, username })

  res.redirect("/users")
})

app.get("/users", (req, res) => {


  res.render("emails", { memory })
})
