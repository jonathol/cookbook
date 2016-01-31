var AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants'),
    RecipeSaveConstants = require('../constants/recipe_save_constants'),
    CookConstants = require('../constants/cook_constants');

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

  receiveDeletedSaveRecipeId: function (recipeId) {
    AppDispatcher.dispatch({
      actionType: RecipeSaveConstants.DELETED_SAVE_RECIPE_ID_RECEIVED,
      recipeId: recipeId
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

  receiveDeletedCookedRecipeId: function (recipeId) {
    AppDispatcher.dispatch({
      actionType: CookConstants.DELETED_COOKED_RECIPE_ID_RECEIVED,
      recipeId: recipeId
    });
  },

  receiveSingleCook: function (cook) {
    AppDispatcher.dispatch({
      actionType: CookConstants.COOK_RECEIVED,
      cook: cook
    });
  },

  receiveAllCookedRecipes: function (cooks) {
    AppDispatcher.dispatch({
      actionType: CookConstants.COOKS_RECEIVED,
      cooks: cooks
    });
  },
};
