const express = require("express")
const router = require("./routes")
const path = require("path")




const app = express()
/* setando a utilização das views com ejs */
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))

/* config arquivos estaticos */
app.use(express.static('public'))


app.listen(3000, () => console.log("iniciando servidor: https://localhost:3000"))

app.use(router)

