const express = require("express")
const path = require("node:path")
const session = require("express-session")
const router = require("./routes")


const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: "palavra-secreta",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(router)



app.listen(3000, () => console.log("servidor iniciado!"))

