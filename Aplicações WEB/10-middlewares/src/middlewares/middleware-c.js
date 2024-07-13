function middlewareC(req, res, next) {
  console.log("executando c")
  req.middlewareC = "OK!"
  next()
}

module.exports = middlewareC