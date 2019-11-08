
exports.seed = function(knex) {
      return knex('book').insert([
        {qty: 1, measurements: 'bag', recipe_id: 1, ingredients_id: 1},
        {qty: 1, measurements: 'cup', recipe_id: 1, ingredients_id: 2},
        {qty: 1, measurements: 'pack', recipe_id: 2, ingredients_id: 3},
        {qty: 1, measurements: 'pack', recipe_id: 3, ingredients_id: 4},
        {qty: 1, measurements: 'cup', recipe_id: 3, ingredients_id: 5},
      ]);
};
