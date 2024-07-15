const { users } = require("./auth-controller")

module.exports = {
  dashboard: (req, res) => {
    const { username } = req.session.currentUser
    res.render("dashboard", { user: { username: username } })
  }
}

