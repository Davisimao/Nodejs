const express = require("express")
const authRouter = require("./router/auth")
const protectedRouter = require("./router/protected")
const roleRouter = require("./router/role")

const app = express()

app.use(express.json())


app.use("/auth", authRouter)
app.use("/protected", protectedRouter)
app.use("/protected", roleRouter)


app.listen(3000, () => console.log("servidor iniciado http://localhost:3000"))