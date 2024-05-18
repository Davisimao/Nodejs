import fs from 'fs';

function Write(content) {
  fs.appendFileSync("./log/Log.txt", content)
  console.log("Arquivo.txt sendo atualizado!")
}


export default Write