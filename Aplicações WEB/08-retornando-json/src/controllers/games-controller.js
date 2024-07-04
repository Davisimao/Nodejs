const games = [{
  id: 1, content: "primeira mensagem"
}, {
  id: 2, content: "segunda mensagem"
}, {
  id: 3, content: "terceira mensagem"
}, {
  id: 4, content: "quarta mensagem"
}, {
  id: 5, content: "quintaa mensagem"
},]

module.exports = {
  index: (req, res) => res.json(games),
  show: (req, res) => {
    const { id } = req.params
    const game = games.find(game => game.id === +id)

    if (!game) {
      res.status(404)
      res.json({ message: "Game not found!!" })
    } else {
      res.json(game)
    }
  },
}