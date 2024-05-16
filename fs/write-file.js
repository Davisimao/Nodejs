const fs = require("node:fs")

try {
  fs.writeFileSync("./arquivo.txt", "hello Word!", "utf-8")
} catch (error) {
  console.log("erro no arquivo", erro.message)
}