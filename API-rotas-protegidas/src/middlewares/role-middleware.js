const users = require("../model/users")
const jwt = require("jsonwebtoken")



const roleMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.json({ message: ` where is the token?` })
  }
  const token = authHeader.split(" ")[1]

  try {
    const decodedToken = jwt.decode(token)
    const user = users.find(user => user.username === decodedToken.username)
    if (user.role !== "admin") {
      return res.status(401).json({
        message: "usuario não tem permissão para acessar essa página"
      })
    }
    next()
  } catch (error) {
    return res.status(401).json({ message: "invalid Token" })
  }
}

module.exports = roleMiddleware