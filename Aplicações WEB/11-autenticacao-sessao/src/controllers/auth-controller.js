let users = [
  { username: "Davi", password: "123456" },
  { username: "teste", password: "123456" }
]

module.exports = {
  //GET /
  index: (req, res) => {
    res.render("index")
  },

  //POST /auth/register

  register: (req, res) => {
    const { username, password } = req.body

    const usern = users.find(user => user.username === username)


    if (usern) {
      return res.status(400).redirect('/')
    }

    const newUser = {
      username,
      password
    }
    users.push(newUser)
    res.redirect('/dashboard')
  },

  //POST auth/login

  login: (req, res) => {
    const { username, password } = req.body

    const user = users.find(user => user.username === username)

    if (password !== user.password) {
      return res.redirect('/')
    }
    req.session.authenticated = true
    req.session.currentUser = user

    res.redirect('/dashboard')
  },
  //GET auth/logout

  logout: (req, res) => {
    req.session.destroy()
    res.redirect('/')
  },

  //POST /auth/logout


  users
}