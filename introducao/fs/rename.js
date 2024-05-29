const fs = require("node:fs")
const filename = "./arquivo.txt"
fs.rename(filename, "./arquivo.csv", (error) => {
  if (error) {
    console.log("erro ao renomear arquivo", error.message)
    return
  }
  console.log("Arquivo renomeado com sucesso")
}

)
