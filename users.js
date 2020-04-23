const db = require('./connection')

// Get all users
const getUsers = (request, response) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Get user by ID
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// POST Create new user
const createUser = async (request, response) => {
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

// Update existing user
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User modified with ID: ${id}`)
  })
}

// Delete a specific user
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
