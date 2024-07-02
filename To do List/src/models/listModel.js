var lists = [{ id: 1, content: "tarefa de casa" }]

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

  }

}

module.exports = listModel