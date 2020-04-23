const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(cors())

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

const users = require('./users')
const register = require('./signup-login')

// Manage users
app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)
app.post('/users', users.createUser)
app.put('/users/:id', users.updateUser)
app.delete('/users/:id', users.deleteUser)

// Log in and sign up
app.post('/signup-login', register.newSignUp)
