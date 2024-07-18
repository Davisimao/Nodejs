const jwt = require("jsonwebtoken")
const users = require("../model/users")


const authMiddleare = (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.json({ message: `Visitante acessando a dashboard` })
  } else {
    const token = authHeader.split(" ")[1]
    try {
      const decodedToken = jwt.decode(token)
      const user = users.find(user => user.username === decodedToken.username)
      if (!user) {
        return res.status(401).json({ message: "usuario não encontrado" })
      }
      req.autheticatedUser = user
      next()
    } catch (error) {
      return res.status(401).json({ message: "invalid Token" })
    }
  }


}



module.exports = authMiddleare