const express = require("express")
const authMiddleware = require("../middleware/auth-middleware")

const protectedRouter = express.Router()

protectedRouter.get("/dashboard", authMiddleware, (req, res) => {

  const { username } = req.autheticatedUser

  res.json({ message: `voce esta na area protegida, Seja bem vindo ${username}` })

})

module.exports = protectedRouter