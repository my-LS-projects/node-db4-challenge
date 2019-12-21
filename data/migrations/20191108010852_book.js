exports.up = function(knex) {
  return knex.schema.createTable("book", tbl => {
    // these are unique to this table
    tbl.increments();
    tbl.float("qty", 64).notNullable();
    tbl.string("measurements", 255).notNullable();

    // foreign key for recipe
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    // if recipes.id is deleted or updated, this is as well

    tbl
      .integer("ingredients_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("book");
};
