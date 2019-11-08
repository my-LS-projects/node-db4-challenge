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
    
}