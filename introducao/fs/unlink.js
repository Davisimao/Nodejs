const fs = require("node:fs")

fs.unlink("arquivo.csv", (error) => {
  if (error) {
    console.log("erro ao apagar arquivo:", error.message)
    return
  }
  console.log("Arquivo apagado com sucesso")
})