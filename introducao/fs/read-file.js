const fs = require('node:fs')
const filename = "./arquivo.txt"
const exists = fs.existsSync(filename)

if (exists) {
  try {
    const data = fs.readFileSync(filename, "utf-8")
    console.log(data)
  } catch (error) {
    console.log("Erro ao ler o arquivo: ", error.message)
  }
} else {
  console.log("arquivo não existe")
}

