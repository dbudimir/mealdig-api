/* eslint-disable camelcase */
exports.shorthands = undefined

exports.up = pgm => {
  pgm.addColumns('users', {
    orders: {
      type: 'integer ARRAY',
      notNull: false
    }
  })
}
