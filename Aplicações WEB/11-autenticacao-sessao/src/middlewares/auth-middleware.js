const users = require("../models/users")


const authMiddleware = (req, res, next) => {
  if (req.session.authenticated) {
    next()
  } else {
    res.redirect("/")
  }
}

const roleMiddleware = (req, res, next) => {
  if (req.session.currentUser.role !== "admin") {
    return res.redirect("/dashboard")
  } else {
    next()
  }
}

module.exports = { authMiddleware, roleMiddleware }