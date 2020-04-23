const db = require('./connection')

// POST Create new user
const newSignUp = async (request, response) => {
  const { name, email } = request.body

  db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
  })
  db.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    response.status(200).json(results.rows)
  })
}

module.exports = {
  newSignUp
}
