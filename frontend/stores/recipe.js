var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants');

var _recipes = [];
var _featuredRecipe;
var RecipeStore = new Store(AppDispatcher);

RecipeStore.all = function () {
  return _recipes.slice(0);
};

RecipeStore.featured = function () {
  return $.extend({ ingredients: [], steps: [] }, _featuredRecipe);
};

RecipeStore.resetRecipes = function (recipes) {
  _recipes = recipes;
  this.__emitChange();
};

RecipeStore.resetFeatured = function (recipe) {
  _featuredRecipe = recipe;
  this.__emitChange();
};

RecipeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:
      this.resetRecipes(payload.recipes);
      break;
    case RecipeConstants.FEATURED_RECIPE_RECEIVED:
      this.resetFeatured(payload.recipe);
      break;
    case RecipeConstants.RECIPE_BOX_RECEIVED:
      this.resetRecipes(payload.recipeBox);
      break;
  }
};

module.exports = RecipeStore;
