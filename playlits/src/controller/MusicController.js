const { playlists } = require("./playlistController")

/* var musics = [
  { playlistId: 1, year: 1995, title: "Wonderwall", artist: "Oasis", album: "(What's the Story) Morning Glory?" },
  { year: 1995, title: "cagando", artist: "Oasis", album: "(What's the Story) Morning Glory?" }
] */

module.exports = {
  deleteMusic: (req, res) => {
    const { id, name } = req.params


    musics.findIndex()
  }

}

/*addMusic: (req, res) => {
 const { id } = req.params
 const { year, title, artist, album } = req.body

 const music = {
   playlistId: +id,
   year,
   title,
   artist,
   album
 }

const playlistindex = playlists.findIndex(playlist => playlist.id === +id)
 
  playlists[playlistindex].musics.find(music => music.playlistId === +id)
*/