
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_number: 1, description: 'hair in bowl', recipe_id: 1},
        {step_number: 2, description: 'sauce in bowl', recipe_id: 1},
        {step_number: 3, description: 'mix', recipe_id: 1},
        {step_number: 1, description: 'thaw meat', recipe_id: 2},
        {step_number: 2, description: 'blend', recipe_id: 2},
        {step_number: 3, description: 'yum', recipe_id: 2},
        {step_number: 1, description: 'pick favorite oreo', recipe_id: 3},
        {step_number: 2, description: 'pour glass of oj', recipe_id: 3},
        {step_number: 3, description: 'dip oreo', recipe_id: 3},
      ]);
};
