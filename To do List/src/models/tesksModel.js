var tesks = []


const teskModel = {
  getAllTesks() {
    return tesks
  },
  createNewTesk(content) {
    const tesk = {
      content: content,
      status: false,
      id: (Math.random() * 10000).toFixed(),
    }

    return tesks.push(tesk)
  },

  deleteTesk(id) {
    tesks = tesks.filter(element => element.id !== id)
  },

  turnOnStatus(id) {
    const tesk = tesks.find(element => element.id === id)

    if (tesk) {

      tesk.status = !tesk.status

    }
  }
}

module.exports = teskModel