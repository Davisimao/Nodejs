const postModel = require("../models/postModel")


const adminController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts()
    res.render("admin", { posts })
  },
  createPost: (req, res) => {
    res.send("hello word!")
  },
  edit: (req, res) => {
    res.send("hello word!")
  }

}

module.exports = adminController