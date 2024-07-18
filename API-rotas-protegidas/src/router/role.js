const express = require("express")
const users = require("../model/users")
const roleMiddleware = require("../middlewares/role-middleware")
const roleRouter = express.Router()



roleRouter.delete("/delete/:name", roleMiddleware, (req, res) => {
  const { name } = req.params

  const user = users.find(user => user.username === name)

  if (!user) {
    res.status(401).json({ message: "usuario não existe" })
  }

  const userIndex = users.findIndex(user => user.name === name)

  users.splice(userIndex, 1)

  res.json({ users })

})




module.exports = roleRouter