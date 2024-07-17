const jwt = require("jsonwebtoken")
const users = require("../models/users")

const secretkey = "jacagay-!123456"


const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization

  const token = authHeader.split(" ")[1]

  try {
    const decodedToken = jwt.verify(token, secretkey)
    const user = users.find(user => user.username === decodedToken.username)
    if (!user) {
      return res.status(401).json({ message: "invalid user" })
    }
    req.autheticatedUser = user
    next()
  } catch (error) {
    return res.status(401).json({ message: "invalid token" })
  }

}

module.exports = authMiddleware