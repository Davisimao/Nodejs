const multer = require("multer")

const uploadMiddleares = multer({
  dest: "/uploads"
})

module.exports = uploadMiddleares