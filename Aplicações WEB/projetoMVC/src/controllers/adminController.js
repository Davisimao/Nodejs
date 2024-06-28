const postModel = require("../models/postModel")


const adminController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts()
    res.render("admin", { posts })
  },
  createPost: (req, res) => {
    res.render("newPostForm")

    console.log(req.body)
    postModel.createPost(req.body.title, req.body.content)

  },
  edit: (req, res) => {
    res.send("hello word!")
  },
  delete: (req, res) => {
    res.send("hello word!")
    console.log(req.body)
  }

}

module.exports = adminController