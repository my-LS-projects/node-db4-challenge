
exports.seed = function(knex) {
      return knex('recipes').insert([
        { recipe_name: 'hair pasta' },
        { recipe_name: 'blended hamburger' },
        { recipe_name: 'oreo and oj' }
      ]);
};