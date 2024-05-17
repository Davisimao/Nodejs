import fs from "node:fs"

function uptadeFile(content) {

  fs.writeFile("meuarquivo.txt", content, "utf-8", (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo:', err.message);
    } else {
      console.log('Update file: O conteúdo foi substituído!');
    }
  })
}


export default uptadeFile
