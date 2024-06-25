const { nanoId } = require("nanoid")
const id = nanoId()
let posts = []



const postModel = {
  getAllPosts() {
    return posts
  },

  getPostById(id) {
    return posts.find(post => post.id === id)
  },

  createPost(title, content) {
    const post = {
      id: id,
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return post
  },

  savePost(post) {
    posts.push(post)
  },

  updatePost(id, updatedPost) {
    const index = posts.findIndex(element => {
      element.id == id
    })

    posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() } /* colcoar somente o updatedPost?? */
  },

  deletePost(id) {

    const index = posts.findIndex(element => {
      element.id == id
    })

    posts.splice(index, 1)

  }
}