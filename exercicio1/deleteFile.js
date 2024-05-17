
import fs from "node:fs"

function deleteFile() {
  fs.unlink("meuarquivo.txt", (error) => {
    if (error) {
      console.log("Ocorreu um erro em", error.message)
      return
    } else {
      console.log("DELETE: meuarquivo.txt excluido")
    }

  })
}

export default deleteFile