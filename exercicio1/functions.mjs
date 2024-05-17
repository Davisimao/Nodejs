import fs from "node:fs"

export function createFile(text) {
  fs.writeFileSync("meuarquivo.txt", text)
  console.log("Criando o arquivo....")
}


export function showFile() {
  try {
    const content = fs.readFileSync("meuarquivo.txt", "utf-8")
    console.log(content)
  } catch (error) {
    console.log("Erro:", error.message)
  }
}

export function updateFile(newText) {
  fs.writeFileSync("meuarquivo.txt", newText)
}

export function deleteFile() {

  try {
    fs.unlinkSync("meuarquivo.txt")
    console.log("Arquivo excluido com sucesso")
  } catch (error) {
    console.log('Erro ao excluir o arquivo: ', error.message)
  }
}