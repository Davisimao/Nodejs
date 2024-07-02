const { list } = require("postcss")

const listController = {
  index: (req, res) => {
    res.render("index")
  },
  app: (req, res) => {
    res.render("app")
  },
  appPost: (req, res) => {
    console.log(req.body)

    res.redirect("app")
  },
  newList: (req, res) => {
    res.render("newList")
  },
}


module.exports = listController