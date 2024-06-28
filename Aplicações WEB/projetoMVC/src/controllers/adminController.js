const postModel = require("../models/postModel")


const adminController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts()
    res.render("admin", { posts })
  },
  showCreatePage: (req, res) => {
    /* get que renderiza a página */
    res.render('create')
  },
  createPost: (req, res) => {
    /*post  que renderiza pega a requisição*/
    const { title, content } = req.body
    postModel.savePost(postModel.createPost(title, content))
    res.redirect("/admin")

  },
  showEditPage: (req, res) => {
    const { id } = req.params
    const post = postModel.getPostById(id)
    res.render("edit", { post, id })
  },
  updatePost: (req, res) => {
    const { title, content } = req.body
    const { id } = req.params
    const updatedPost = { title, content }
    postModel.updatePost(id, updatedPost)
    res.redirect("/")
  },

  deletePost: (req, res) => {
    const { id } = req.params
    postModel.deletePost(id)
    res.redirect('/admin')
  }

}

module.exports = adminController