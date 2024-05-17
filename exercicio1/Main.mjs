import updateFile from "./UpdateFile.js";
import createFile from "./createFile.js"
import deleteFile from "./deleteFile.js";
import showFile from "./showFile.js";

createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
showFile()
console.log("-----------------------")
updateFile("Conteúdo modificado!");
console.log("-----------------------")
showFile()
deleteFile()