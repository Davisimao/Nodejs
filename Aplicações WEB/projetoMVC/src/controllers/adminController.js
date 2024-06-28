const postModel = require("../models/postModel")


const adminController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts()
    res.render("admin", { posts })
  },
  showCreatePage: (req, res) => {
    res.render('create')
  },
  createPost: (req, res) => {

    const { title, content } = req.body

    postModel.savePost(postModel.createPost(title, content))


    res.redirect("/admin")

  },
  edit: (req, res) => {
    res.send("hello word!")
  },
  delete: (req, res) => {

    postModel.deletePost(req.params.id)


    res.redirect("/admin")
  }

}

module.exports = adminController