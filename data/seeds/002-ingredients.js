
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'hair'},
        {ingredient_name: 'sauce'},
        {ingredient_name: 'hamburger'},
        {ingredient_name: 'oreos'},
        {ingredient_name: 'oj'}
      ]);

};
