const express = require("express")
const authMiddleare = require("../middlewares/auth-middleware")

const protectedRouter = express.Router()


protectedRouter.get("/dashboard", authMiddleare, (req, res) => {

  res.json({ measage: "teste" })
})





module.exports = protectedRouter