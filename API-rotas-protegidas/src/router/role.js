const express = require("express")
const users = require("../model/users")
const roleMiddleware = require("../middlewares/role-middleware")
const roleRouter = express.Router()



roleRouter.delete("/delete/:name", roleMiddleware, (req, res) => {
  const { name } = req.params

  const user = users.find(user => user.username === name)

  if (!user) {
    res.status(401).json({ message: "usuario não existe" })
  } else {
    const userIndex = users.findIndex(user => user.name === name)

    users.splice(userIndex, 1)

    res.json({ users })
  }



})

roleRouter.post("/createUser", roleMiddleware, (req, res) => {

  const { username, password, email } = req.body
  const userUsed = users.find(user => user.username == username)
  const emailUsed = users.find(user => user.email == email)

  if (userUsed || emailUsed) {
    return res.json({ message: "Esta credencial já foi usada, mude o username/email" })
  }

  const newUser = {
    username, password, email, role: "admin"
  }

  users.push(newUser)

  res.json(newUser)
})




module.exports = roleRouter