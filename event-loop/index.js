const fs = require("fs")
console.log("Inicio")

fs.readFile("./arquivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data)
})

console.log("Final!")