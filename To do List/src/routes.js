const express = require("express")
const listController = require("./controllers/listController")
const teskController = require("./controllers/teskController")


const router = express.Router()


router.get("/", listController.index)
router.get("/app", listController.app)
router.post("/app", listController.appPost)
router.post("/app/new-list", listController.newList)
router.get("/app/new-list", listController.newList)
router.get("/app/:id", listController.tasks)
router.post("/app/:id", teskController.tesk)
router.post("/app/:id/delete", listController.deleteList)
router.post("/app/tesk/:id/delete", teskController.deleteTesk)
router.post("/app/:id/complete", teskController.changeStatus)

module.exports = router