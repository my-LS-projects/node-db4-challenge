const db = require('../dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes () {
    return db.select('*').from('recipes')
}

function getShoppingList (id) {
    // select ingredients.ingredient_name, recipes.recipe_name from book join ingredients, recipes on book.ingredients_id = ingredients.id and recipe_id = recipes.id
    return db.select('ingredients.ingredient_name', 'recipes.recipe_name', 'book.qty')
    .from('book')
    .join('ingredients', function() {
        this.on('book.ingredients_id', '=', 'ingredients.id')
    })
    .join('recipes', function() {
        this.on('book.recipe_id', '=', 'recipes.id')
    })
    .where({'recipes.id': id})
}

function getInstructions (id) {
    // get instructions depending on recipe id
    // select recipes.recipe_name, steps.description from steps join recipes on recipes.id = steps.recipe_id where recipes.id = 2 order by steps.step_number asc
    return db.select('recipes.recipe_name', 'steps.description', 'steps.step_number')
    .from('steps')
    .join('recipes', function() {
        this.on('recipes.id', '=', 'steps.recipe_id')
    })
    .where({'recipes.id': id})
}