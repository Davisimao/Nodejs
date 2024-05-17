import fs from 'node:fs';

const filename = "meuarquivo.txt"


function showFile() {

  fs.readFile(filename, "utf-8", (error, text) => {
    if (error) {
      console.log(error)
    } else {
      console.log(text)
    }
  })

} 

}


export default showFile
