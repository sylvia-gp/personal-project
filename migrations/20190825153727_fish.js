
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fish', (table) => {
      table.increments('id')
      table.string('image')
      table.string('species')
      table.integer('quantity')
      table.string('tank_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fish')
};
