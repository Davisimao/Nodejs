const jwt = require("jsonwebtoken")


const authMiddleare = (req, res, next) => {

  const authHeader = req.headers.authorization

  const token = authHeader.split(" ")[1]

  console.log(token)

  next()


}


module.exports = authMiddleare