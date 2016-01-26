var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants');

var _recipes = [];
var _featuredRecipe;
var RecipeStore = new Store(AppDispatcher);

RecipeStore.all = function () {
  return _recipes.slice(0);
};

RecipeStore.

RecipeStore.resetRecipes = function (recipes) {
  _recipes = recipes;
  RecipeStore.__emitChange();
};

ResetStore.resetFeatured = function (recipe) {
  _featuredRecipe = recipe;
  RecipeStore.__emitChange();
};

RecipeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:
      RecipeStore.resetRecipes(payload.recipes);
      break;
    case RecipeConstants.RECIPE_RECEIVED:
      RecipeStore.resetFeatured(payload.recipe);
      break;
  }
};

module.exports = RecipeStore;
