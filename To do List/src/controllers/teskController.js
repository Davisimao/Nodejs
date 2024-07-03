const teskModel = require("../models/tesksModel")

const teskController = {
  tesk: (req, res) => {

    const { nameTesk } = req.body
    const { id } = req.params

    teskModel.createNewTesk(nameTesk, id)

    res.redirect(`/app/${id}`)
  },
  deleteTesk: (req, res) => {

    const { id } = req.params;
    const { listId } = req.body
    
    teskModel.deleteTesk(id);

    res.redirect(`/app/${listId}`);
  }
}

module.exports = teskController