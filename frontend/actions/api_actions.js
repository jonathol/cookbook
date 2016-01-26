var AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants');

module.exports = {
  receiveAllRecipes: function (recipes) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECIPES_RECEIVED,
      recipes: recipes
    });
  },

  receiveSingleRecipe: function (recipe) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECIPE_RECEIVED,
      recipe: recipe
    });
  }
};
