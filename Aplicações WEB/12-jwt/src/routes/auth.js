const express = require("express")
const users = require("../models/users")
const jwt = require("jsonwebtoken")
const secretkey = "jacagay-!123456"
const authRouter = express.Router()

authRouter.post("/register", (req, res) => {
  const { username, password } = req.body

  const newUser = {
    username,
    password
  }

  users.push(newUser)

  res.status(201).json(newUser)
})

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username)

  if (!user || user.password !== password) {
    return res.json(401).json({ message: "not found!" })
  }
  const token = jwt.sign({ message: "testando payload" }, secretkey, { expiresIn: "1h" })
  res.json({ token })

})

module.exports = authRouter