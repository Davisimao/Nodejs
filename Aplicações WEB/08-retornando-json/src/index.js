const express = require("express")
const games = require("./controllers/games-controller")
const gamesController = require("./controllers/games-controller")

const app = express()
app.use(express.json())

app.post("/",)

app.get("/games", gamesController.index)
app.get("/games/:id", gamesController.show)
app.post("/games", gamesController.save)
app.post("/games/:id/genres", gamesController.genres)
app.put("/games/:id", gamesController.update)


app.listen(3000, () => console.log("Rodando servidor no http://localhost:3000"))