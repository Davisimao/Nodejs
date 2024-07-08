var playlists = [{
  id: 1,
  music: [],
  name: "As melhors do ano",
  tags: []
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
    const { music, name, tags } = req.body
    const playlist = {
      id: Math.floor(Math.random() * 999999),
      music,
      name,
      tags,
    }
    playlists.push(playlist)
    res.json(playlist)
  }
}