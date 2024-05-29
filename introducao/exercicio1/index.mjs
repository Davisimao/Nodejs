import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs"

createFile("Conteúdo inicial do arquivo\nCriado com o módulo fs do Node.js")
console.log("--------------")
showFile()
console.log("--------------")
updateFile("Conteúdo modificado...")
console.log("--------------")
showFile()
console.log("--------------")
deleteFile()