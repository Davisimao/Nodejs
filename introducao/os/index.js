const os = require("node:os")

const plataforma = os.platform()

console.log(plataforma)

const arch = os.arch()
console.log(arch)

const CPU = os.cpus()
console.log(CPU[0])

const memoria = os.totalmem()
console.log(memoria / 1024 / 1024 / 1024, "GB de ram")