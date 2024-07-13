const { playlists } = require("../playlists")

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
    const { musics, name, tags } = req.body
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
  },

  //POST playlists/:id/musics

  addMusic: (req, res) => {
    const { id } = req.params
    const { title, year, artist, album } = req.body

    const music = {
      id: Math.floor(Math.random() * 999999),
      title,
      year,
      artist,
      album
    }

    const playlist = playlists.find(playlist => playlist.id === +id)

    playlist.musics.push(music)

    res.status(201).json(music)

  },

  // DELETE  /playlists/:id/musics/:musicId

  deleteMusics: (req, res) => {
    const { id, musicId } = req.params

    const playlist = playlists.find(playlist => playlist.id === +id)

    const musicIndex = playlist.musics.findIndex(music => music.id === +musicId)

    playlist.musics.splice(musicIndex, 1)

    res.status(204).end()

  },
  //PUT /playlist/:id/tags/:name
  updateTags: (req, res) => {

    const { id, name } = req.params

    const { nameTag } = req.body


    const playlistIndex = playlists.findIndex(playlist => playlist.id === +id)

    const tagIndex = playlists[playlistIndex].tags.findIndex(tag => tag === name)

    playlists[playlistIndex].tags[tagIndex] = nameTag






    res.json(playlists[playlistIndex])

  }
} 
