var AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants'),
    RecipeSaveConstants = require('../constants/recipe_save_constants'),
    CookConstants = require('../constants/cook_constants'),
    RatingConstants = require('../constants/rating_constants'),
    NoteConstants = require('../constants/note_constants');

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

  receiveUserRatings: function (ratings) {
    AppDispatcher.dispatch({
      actionType: RatingConstants.USER_RATINGS_RECEIVED,
      ratings: ratings
    });
  },

  receiveUserRating: function (rating) {
    AppDispatcher.dispatch({
      actionType: RatingConstants.USER_RATING_RECEIVED,
      rating: rating
    });
  },

  receiveUserNoteLikes: function (noteLikes) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKES_RECEIVED,
      likes: likes
    });
  },

  receiveUserNoteLike: function (noteLike) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      like: like
    });
  },

  receiveDeletedLikeNoteId: function (noteId) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.DELETED_LIKE_NOTE_ID_RECEIVED,
      noteId: noteId
    });
  },

  receiveAllNotes: function (notes) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.NOTES_RECEIVED,
      notes: notes
    });
  }
};
