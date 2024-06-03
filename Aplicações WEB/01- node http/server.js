const http = require("node:http")

const server = http.createServer((request, response) => {
  const path = request.url
  switch (path) {
    case "/":
      response.writeHead(200)
      response.write("Página inicial")
      break
    case "/davi":
      response.writeHead(200)
      response.write("Teste do davizinho")
      break

    default:
      response.writeHead(404)
      response.write("Página não encontrada")
  }

  response.end()
})
const port = 3000
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})