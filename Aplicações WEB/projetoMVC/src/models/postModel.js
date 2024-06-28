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
      id: (Math.random() * 10000).toFixed(),
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
    posts = posts.filter(element => element.id !== id)

  }
}

module.exports = postModel