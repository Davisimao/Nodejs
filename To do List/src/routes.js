const express = require("express")
const listController = require("./controllers/listController")


const router = express.Router()


router.get("/", listController.index)
router.get("/app", listController.app)
router.post("/app", listController.appPost)
router.post("/app/new-list", listController.newList)
router.get("/app/new-list", listController.newList)
router.get("/app/:id", listController.tasks)

module.exports = router