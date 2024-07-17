const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.autorization

  if (!authHeader) {
    res.status(401).json({ message: "cade o token em?" })
  }
  console.log(authHeader)
  next()


}

module.exports = authMiddleware