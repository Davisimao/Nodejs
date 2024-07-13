const express = require("express")
const uploadMiddleares = require("./middlewares/upload-middleware")
const app = express()

app.use(express.static("public"))

app.post("/upload", uploadMiddleares.single("image"), (req, res) => {
  console.log(req.file, req.body)

  res.json({ message: "Arquivo salvo com sucesso!" })
})

app.listen(3000, () => {
  return console.log("servidor funcionando http://localhost:3000")
})



