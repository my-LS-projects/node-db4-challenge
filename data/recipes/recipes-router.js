const router = require("express").Router();
const db = require("../dbConfig");
const Recipes = require("./recipes-model");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json(err));
});

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params
  Recipes.getInstructions(id)
    .then(steps => res.status(200).json(steps))
    .catch(error => res.status(500).json(error));
});
module.exports = router;