
exports.up = function(knex, Promise) {
  return knex.schema.createTable('alumni',
  function(table){
      table.increments();
      table.string('name'); 
      table.string('cohort');
      table.string('graduation_date');
      table.boolean('employed');
      table.string('employer');
      table.string('hire_date');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('alumni');
};
