const express = require("express")
const dashboardController = require("./controllers/dashboard-controller")
const authController = require("./controllers/auth-controller")
const { authMiddleware, roleMiddleware } = require('./middlewares/auth-middleware')



const router = express.Router()

router.get("/", authController.index)
router.get("/dashboard", authMiddleware, dashboardController.dashboard)
router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)
router.get("/auth/logout", authMiddleware, authController.logout)
router.get("/dashboard/users", authMiddleware, roleMiddleware, dashboardController.users)




module.exports = router