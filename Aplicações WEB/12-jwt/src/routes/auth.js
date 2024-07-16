const express = require("express")
const users = require("../models/users")

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

module.exports = authRouter