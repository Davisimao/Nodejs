const express = require("express")
const router = require("./routes")
const path = require("path")




const app = express()



app.listen(3000, () => console.log("iniciando servidor: https://localhost:3000"))

app.use(router)

