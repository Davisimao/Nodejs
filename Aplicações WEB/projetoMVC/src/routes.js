const express = require("express")
const postsController = require("./controllers/postsController")

const adminController = require("./controllers/adminController")



const router = express.Router()

router.get("/", postsController.index)
router.get(`/posts/:id`, postsController.show)
router.get('/admin/create', adminController.showCreatePage)
router.post("/admin/create", adminController.createPost)
router.get("/admin", adminController.index)
router.post("/admin/delete/:id", adminController.delete)


module.exports = router