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
    const { id } = req.params
    const list = listModel.getListById(id)

    console.log({ list })
    res.render("tesks", { list })
  }
}


module.exports = listController