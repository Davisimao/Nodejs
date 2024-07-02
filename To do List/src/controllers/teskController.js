const teskModel = require("../models/tesksModel")

const teskController = {
  tesk: (req, res) => {

    const { nameTesk } = req.body
    const { id } = req.params

    teskModel.createNewTesk(nameTesk)

    res.redirect(`/app/${id}`)
  },
}

module.exports = teskController