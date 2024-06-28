const express = require("express")
const postsController = require("./controllers/postsController")

const adminController = require("./controllers/adminController")



const router = express.Router()

router.get("/", postsController.index)
router.get(`/posts/:id`, postsController.show)

router.get("/admin", adminController.index)
/* router.get("/admin/edit/:id", adminController.edit) */
router.get("/admin/create", adminController.createPost)
router.post("/admin/create", adminController.createPost)


module.exports = router