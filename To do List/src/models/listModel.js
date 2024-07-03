var lists = []

const listModel = {

  getAllList() {
    return lists
  },

  createList(content) {
    const list = {
      content: content,
      id: (Math.random() * 1000).toFixed()
    }
    lists.push(list)

  },

  getListById(id) {
    return lists.find(element => element.id === id)
  },

  deleteList(id) {
    lists = lists.filter(element => element.id !== id)
  }

}

module.exports = listModel