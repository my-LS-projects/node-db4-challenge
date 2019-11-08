
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments(); // creates primary key id that autoincrements

        tbl.string('recipe_name', 255).notNullable();
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
  };
  
