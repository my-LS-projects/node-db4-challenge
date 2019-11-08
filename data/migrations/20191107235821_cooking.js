
exports.up = function(knex) {
    return knex.schema.createTable('cooking', tbl => {
        tbl.increments(); // creates primary key id that autoincrements
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cooking');
  };
  
