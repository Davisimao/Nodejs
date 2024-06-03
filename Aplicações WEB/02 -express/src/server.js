const express = require("express")

const server = express()

server.get("/", (request, response) => {
  response.send("Enviando texto, para essa página ~[ çç~~")
})


const port = 3000

server.listen(port, () => {
  console.log("Express sever rodando na http://localhost:" + port)
})
