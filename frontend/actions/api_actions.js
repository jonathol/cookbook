var AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants');

module.exports = {
  receiveAllRecipes: function (recipes) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECIPES_RECEIVED,
      recipes: recipes
    });
  },

  receiveFeaturedRecipe: function (recipe) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.FEATURED_RECIPE_RECEIVED,
      recipe: recipe
    });
  },

  receiveRecipeBox: function (recipeBox) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECIPE_BOX_RECEIVED,
      recipeBox: recipeBox
    });
  }
};
