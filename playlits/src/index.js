const express = require("express")
const playlistController = require("./controller/playlistController")

const app = express()
app.use(express.json())

app.listen(3000, () => console.log("servidor iniciado em http://localhost:3000"))


app.get("/playlist", playlistController.index)
app.get("/playlist/:id", playlistController.getPlaylistbyId)
app.post("/playlist", playlistController.createPlaylist)
app.delete("/playlist/:id/delete", playlistController.deletePlaylist)
app.post("/playlist/:id/musics", playlistController.addMusic)
app.delete("/playlist/:id/musics/:musicId", playlistController.deleteMusics)


