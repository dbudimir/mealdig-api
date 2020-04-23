exports.up = pgm => {
  pgm.createTable(
    'users',
    {
      id: 'id',
      name: { type: 'varchar(255)', notNull: true },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp')
      }
    },
    { ifNotExists: true }
  )
  pgm.createTable('posts', {
    id: 'id',
    userId: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'cascade'
    },
    body: { type: 'text', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
  pgm.createIndex('posts', 'userId')
}
