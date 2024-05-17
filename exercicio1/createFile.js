import fs from "node:fs"

function createFile(conteudo) {
  fs.writeFile("meuarquivo.txt", conteudo, (error) => {
    if (error) {
      console.log("Ocorreu um erro em", error.message)
      return
    } else {
      console.log("Createfile: meuarquivo.txt buildado")
    }
  })
}



export default createFile

