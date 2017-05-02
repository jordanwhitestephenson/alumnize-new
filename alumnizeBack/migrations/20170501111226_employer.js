
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employer',
  function(table){
      table.increments();
      table.string('company_name').unique();
      table.string('employer_adress');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employer');
};
