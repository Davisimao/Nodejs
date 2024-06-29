const express = require("express")
const path = require("path")
const router = require("./routes")


const app = express()
const PORT = 3000

/* setando a utilização das views com ejs */
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: true }))

/* config arquivos estaticos */
app.use(express.static('public'))

/* importanto o router */
app.use(router)


app.listen(PORT, () => {
  console.log(`rodando na http://localhost:${PORT}`)
})

