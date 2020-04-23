const Pool = require('pg').Pool

const db = new Pool({
  user: 'davidbudimir',
  host: 'localhost',
  database: 'mealdig',
  password: 'password',
  port: 5432
})

module.exports = db
