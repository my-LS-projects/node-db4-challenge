
exports.up = function(knex) {
    return knex.schema.createTable('instructions', tbl => {
        tbl.increments(); // creates primary key id that autoincrements
  
        tbl.integer('step', 255).unsigned().notNullable(); //unsigned makes the int absolute, can't be negative

        tbl.string('description', 255).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructions');
  };
  
