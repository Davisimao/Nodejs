var playlists = [{
  id: 340,
  music: ["Lets go"],
  name: "As melhors do ano",
  tags: []
}]



const playlistController = {


}


module.exports = {
  index: (req, res) => {
    res.json({ playlists })
  },


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