var AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants'),
    RecipeSaveConstants = require('../constants/recipe_save_constants');

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

  receiveSingleRecipe: function (recipes) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECIPES_RECEIVED,
      recipes: recipes
    });
  },

  receiveRecipeBox: function (recipeBox) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECIPE_BOX_RECEIVED,
      recipeBox: recipeBox
    });
  },

  receiveSingleRecipeSave: function (recipeSave) {
    AppDispatcher.dispatch({
      actionType: RecipeSaveConstants.RECIPE_SAVE_RECEIVED,
      recipeSave: recipeSave
    });
  },

  receiveAllRecipeSaves: function (recipeSaves) {
    AppDispatcher.dispatch({
      actionType: RecipeSaveConstants.RECIPE_SAVES_RECEIVED,
      recipeSaves: recipeSaves
    });
  },
};
