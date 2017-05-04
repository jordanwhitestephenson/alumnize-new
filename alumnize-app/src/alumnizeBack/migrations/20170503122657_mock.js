
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mock',
  function(table){
      table.integer('id');
      table.string('company');
      table.string('address');
      table.string('job title');
      table.string('gender');
      table.string('graduatedate');
      table.string('employeddate');
      table.decimal('lat');
      table.decimal('long');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('mock');
};
