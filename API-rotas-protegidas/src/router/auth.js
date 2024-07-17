const express = require("express")
const users = require("../model/users")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")


authRouter.post("/register", (req, res) => {
  const { username, password, email } = req.body

  const userUsed = users.find(user => user.username == username)
  const emailUsed = users.find(user => user.email == email)

  if (userUsed || emailUsed) {
    return res.json({ message: "Esta credencial j]a foi usada, mude o username/email" })
  }

  const newUser = {
    username, password, email, role: "basic"
  }

  users.push(newUser)

  res.json(newUser)

})

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username == username)

  if (!user || user.password !== password) {
    return res.json(401).json({ message: "not found!" })
  }

  const token = jwt.sign({ username }, "chavesecreta")

  res.json({ token })

})

module.exports = authRouter