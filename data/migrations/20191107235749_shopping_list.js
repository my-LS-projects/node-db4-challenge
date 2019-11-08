
exports.up = function(knex) {
  return knex.schema.createTable('shoppingList', tbl => {
      tbl.increments(); // creates primary key id that autoincrements

      tbl.string('ingredient_name', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shoppingList');
};
