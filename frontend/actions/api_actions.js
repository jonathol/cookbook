var AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeConstants = require('../constants/recipe_constants'),
    RecipeSaveConstants = require('../constants/recipe_save_constants'),
    CookConstants = require('../constants/cook_constants'),
    RatingConstants = require('../constants/rating_constants'),
    NoteConstants = require('../constants/note_constants'),
    LikeConstants = require('../constants/like_constants'),
    TagConstants = require('../constants/tag_constants'),
    SearchConstants = require('../constants/search_constants'),
    UserConstants = require('../constants/user');

module.exports = {
  receiveRecipesList: function (recipes) {
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

  receiveRecipeDetails: function (recipe) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.DETAILED_RECIPE_RECEIVED,
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

  receiveFeaturedTags: function (tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.FEATURED_TAGS_RECEIVED,
      tags: tags
    });
  },

  receivePopularTags: function (tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.POPULAR_TAGS_RECEIVED,
      tags: tags
    });
  },

  receiveIndexedTag: function (tag) {
    AppDispatcher.dispatch({
      actionType: TagConstants.INDEXED_TAG_RECEIVED,
      tag: tag
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
      noteLikes: noteLikes
    });
  },

  receiveUserNoteLike: function (noteLike) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      noteLike: noteLike
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
  },

  receiveInstantResults: function (results) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.INSTANT_SEARCH_RESULTS_RECEIVED,
      results: results
    });
  },

  receiveFullSearch: function (search) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.FULL_PAGE_SEARCH_RESULTS_RECEIVED,
      search: search
    });
  },

  receiveUserInfo: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_INFO_RECEIVED,
      user: user
    });
  }
};
