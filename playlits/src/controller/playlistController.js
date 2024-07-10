var playlists = [{
  id: 1,
  musics: [{ id: 1, year: 2000, title: "Ai se eu te pego", artist: "Michel Telo", album: "cucabeludo" }],
  name: "As melhors do ano",
  tags: ["curtidas", "as melhores"]
}, {
  id: 2,
  musics: [
    { id: 2, year: 1995, title: "Wonderwall", artist: "Oasis", album: "(What's the Story) Morning Glory?" },
    { id: 3, year: 1991, title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind" }
  ],
  name: "Rock Clássico",
  tags: ["rock", "clássicos", "anos 90"]
}]

module.exports = {
  //GET /playlist
  index: (req, res) => {
    res.json({ playlists })
  },


  //GET playlist/:id
  getPlaylistbyId: (req, res) => {
    const { id } = req.params

    const playlist = playlists.find(playlist => playlist.id === +id)

    if (!playlist) {
      res.status(404)
      res.json({ message: "playlist not found!!" })
    } else {
      res.json(playlist)
    }

  },

  //POST /playlist
  createPlaylist: (req, res) => {
    const { name, tags } = req.body
    const playlist = {
      id: Math.floor(Math.random() * 999999),
      /* music: music, ??? */
      name: name,
      tags: tags,
    }
    playlists.push(playlist)
    res.json(playlist)

  },

  //DELETE /playlist/:id/:name

  /* deleteMusic: (req, res) => {
    const { id, name } = req.params

    const playlistIndex = playlists.findIndex(playlist => playlist.id === +id)

    playlists[playlistIndex].musics = playlists[playlistIndex].musics.splice(music => music.name === name)
é preciso criar um objeto somente para music, com o id de cada music

  }*/
  playlists
} 