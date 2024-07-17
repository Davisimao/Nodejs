const express = require("express")
const authMiddleware = require("../middleware/auth-middleware")

const protectedRouter = express.Router()

protectedRouter.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "voce esta protejidinho" })
})

module.exports = protectedRouter