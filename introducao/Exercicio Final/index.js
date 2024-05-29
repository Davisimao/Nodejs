/* Crie uma aplicação de linha de comando usando Node.js para criar e gerenciar 
anotações rápidas pelo terminal. A aplicação deve possuir um menu de diferentes opções, 
permitindo criar anotações, listar todas os arquivos salvos, ler uma anotação específica e excluir uma anotação específica. 
Todas as anotações devem ser salvas em formato .txt dentro de uma pasta “notes” junto com o próprio script principal. */



const readLine = require("node:readline")
const fs = require("node:fs")

const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

rl.question(`
---------------------
Bem vindo ao Menu (Para sair digite CTRL+C):

1. Crie anotações
2. Listar Arquivos salvos
3. Ler anotações
4. Deletar anotações
5. Sair
---------------------
`, (resposta) => {


  if (resposta === "s") {
    rl.write("gayyyy")
    rl.on("SIGINT", () => {
      rl.question("deseja sair?(s/n)  ", (callback) => {
        if (callback === "s") {
          rl.close()
        } else {
          rl.write("voltando...")
        }
      })
    })

  }

  else if (resposta === "1") {
    rl.question("Digite o que quer anotar: ", (input) => {
      rl.question("nome do arquivo: ", (name) => {
        fs.writeFile(`./notes/${name}.txt`, input, "utf8", () => {
          console.log("Arquivo criado!")
          rl.close()
        })
      })

    })
  }

  else if (resposta === "3") {
    rl.question("Qual o nome do arquivo quer deseja ler: ", (nameArq) => {
      fs.readFile(`${nameArq}.txt`, "utf8", (_, data) => {
        console.log("Conteúdo do arquivo:", data);
        rl.close();
      })
    })


  }

  else if (resposta === "5") {
    rl.write("saindo...")
    rl.close()
  }
})
