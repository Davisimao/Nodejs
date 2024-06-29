const express = require("express")
const listController = require("./controllers/listController")


const router = express.Router()


router.get("/", listController.index)
router.get("/list", listController.list)

module.exports = router