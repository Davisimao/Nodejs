const users = require("../models/users")

module.exports = {
  dashboard: (req, res) => {
    const { username } = req.session.currentUser
    res.render("dashboard", { user: { username } })
  },

  users: (req, res) => {
    res.render("users", { users })
  }
}

