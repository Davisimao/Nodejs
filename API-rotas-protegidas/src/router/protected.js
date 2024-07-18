const express = require("express")
const authMiddleare = require("../middlewares/auth-middleware")

const protectedRouter = express.Router()


protectedRouter.get("/dashboard", authMiddleare, (req, res) => {

  const { username } = req.autheticatedUser



  res.json({ message: `${username} acessando a dashboard` })
})





module.exports = protectedRouter