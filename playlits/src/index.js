const express = require("express")
const playlistController = require("./controller/playlistController")
const MusicController = require("./controller/MusicController")

const app = express()
app.use(express.json())

app.listen(3000, () => console.log("servidor iniciado em http://localhost:3000"))

app.get("/playlist", playlistController.index)
app.get("/playlist/:id", playlistController.getPlaylistbyId)
app.post("/playlist", playlistController.createPlaylist)



