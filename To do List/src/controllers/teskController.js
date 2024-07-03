const teskModel = require("../models/tesksModel")

const teskController = {
  tesk: (req, res) => {

    const { nameTesk } = req.body
    const { id } = req.params

    teskModel.createNewTesk(nameTesk)

    res.redirect(`/app/${id}`)
  },
  deleteTesk: (req, res) => {
    const { id } = req.params

    teskModel.deleteTesk(id)

    res.redirect(`/app/${id}`)

    /* estou passando o id da tesk, precisa ser o id da lista */
  }
}

module.exports = teskController