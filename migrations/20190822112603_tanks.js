
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tanks', (table) => {
      table.increments('id')
      table.integer('litres')
      table.string('img')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tanks')
};
