var tesks = []


const teskModel = {
  getAllTesks() {
    return tesks
  },
  createNewTesk(content) {
    const tesk = {
      content: content,
      status: true,
      id: (Math.random() * 10000).toFixed(),
    }

    return tesks.push(tesk)
  },

  deleteTesk(id) {
    tesks = tesks.filter(element => element.id !== id)
  }
}

module.exports = teskModel