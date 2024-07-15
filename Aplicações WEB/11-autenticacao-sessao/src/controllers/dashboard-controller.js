const { users } = require("./auth-controller")

module.exports = {
  dashboard: (req, res) => {
    console.log(req.session.authenticated)
    if (req.session.authenticated) {
      const { username, password } = req.session.currentUser
      res.render("dashboard", { user: { username: username } })
    } else {
      res.send("Se logue primiero!")
    }


  }
}

