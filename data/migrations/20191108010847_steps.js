exports.up = function(knex) {
  return knex.schema.createTable("steps", tbl => {
      // unique values
    tbl.increments();

    tbl
      .integer("step_number", 50)
      .unsigned()
      .notNullable();

    tbl.string("description", 255).notNullable();


    // foreign key
    tbl
      .integer("recipe_id", 50)
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("steps");
};
