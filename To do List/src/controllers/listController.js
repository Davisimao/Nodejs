const { list } = require("postcss")

const listController = {
  index: (req, res) => {
    res.render("index")
  },
  list: (req, res) => {
    res.render("list")
  }
}


module.exports = listController