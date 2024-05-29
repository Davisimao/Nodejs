const readLine = require("node:readline")

const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })


rl.question("Qual o seu nome? ", (nome) => {
  rl.write("ola " + nome)
  rl.close()
})