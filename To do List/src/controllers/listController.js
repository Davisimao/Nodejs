const listModel = require("../models/listModel")

const listController = {
  index: (req, res) => {
    res.render("index")
  },
  app: (req, res) => {
    const lists = listModel.getAllList()

    res.render("app", { lists })
  },
  appPost: (req, res) => {
    const { nameList } = req.body

    listModel.createList(nameList)


    res.redirect("app")
  },
  newList: (req, res) => {
    res.render("newList")
  },
  tasks: (req, res) => {
    res.send("hello")
  }
}


module.exports = listController