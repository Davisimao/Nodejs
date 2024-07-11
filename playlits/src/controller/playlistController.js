const playlists = [
  {
    id: 1,
    musics: [
      { title: "Song A", artist: "Artist 1" },
      { title: "Song B", artist: "Artist 2" },
      { title: "Song C", artist: "Artist 3" },
    ],
    name: "Morning Vibes",
    tags: ["chill", "morning", "relax"],
  },
  {
    id: 2,
    musics: [
      { title: "Track X", artist: "Artist A" },
      { title: "Track Y", artist: "Artist B" },
      { title: "Track Z", artist: "Artist C" },
    ],
    name: "Workout Hits",
    tags: ["energetic", "workout", "pump"],
  }
]


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
      musics: musics ?? [],
      name: name,
      tags: tags,
    }
    playlists.push(playlist)
    res.json(playlist)

  },

  //DELETE playlists/:id/delete

  deletePlaylist: (req, res) => {
    const { id } = req.params

    const playlistindex = playlists.findIndex(playlist => playlist.id === +id)


    playlists.splice(playlistindex, 1)
    res.status(204).end()
  }


} 