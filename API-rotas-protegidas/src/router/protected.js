const express = require("express")
const authMiddleare = require("../middlewares/auth-middleware")
const roleMiddleware = require("../middlewares/role-middleware")
const users = require("../model/users")

const protectedRouter = express.Router()


protectedRouter.get("/dashboard", authMiddleare, (req, res) => {

  const { username } = req.autheticatedUser



  res.json({ message: `${username} acessando a dashboard` })
})


protectedRouter.get("/users", roleMiddleware, (req, res) => {

  res.json({ users })

})




module.exports = protectedRouter