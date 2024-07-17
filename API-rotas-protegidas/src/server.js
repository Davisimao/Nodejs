const express = require("express")
const authRouter = require("./router/auth")

const app = express()

app.use(express.json())


app.use("/auth", authRouter)


app.listen(3000, () => console.log("servidor iniciado http://localhost:300"))