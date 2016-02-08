var ApiActions = require('../actions/api_actions'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session');

var ApiUtil = {
  instantSearch: function (query) {
    $.ajax({
      url: '/api/search?instant=true&query=' + query,
      type: 'GET',
      success: function (data) {
        ApiActions.receiveInstantResults(data);
      }
    });
  },

  fullSearch: function (query, page) {
    $.ajax({
      url: '/api/search?query=' + query + '&page=' + page,
      type: 'GET',
      success: function (data) {
        ApiActions.receiveFullSearch(data);
      }
    });
  },

  fetchAllRecipes: function () {
    $.ajax({
      type: "GET",
      url: "api/recipes",
      success: function (data) {
        ApiActions.receiveRecipesList(data.recipes);
      }
    });
  },

  fetchAuthoredRecipes: function (userId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + userId + "/recipes",
      success: function (recipes) {
        ApiActions.receiveRecipesList(recipes);
      }
    });
  },

  fetchFeaturedRecipes: function () {
    $.ajax({
      type: "GET",
      url: "api/recipes?featured=true",
      success: function (data) {
        ApiActions.receiveFeaturedRecipe(data.recipe);
        ApiActions.receiveRecipesList(data.recipes_list);
      }
    });
  },

  fetchRecipeDetails: function (recipeId) {
    $.ajax({
      type: "GET",
      url: "api/recipes/" + recipeId,
      success: function (recipe) {
        ApiActions.receiveRecipeDetails(recipe);
      }
    });
  },

  fetchRecipeBox: function (userId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + userId + "/recipe_box",
      success: function (data) {
        ApiActions.receiveRecipesList(data.recipes);
        ApiActions.receiveUserInfo(data.user);
      }
    });
  },

  fetchFeaturedTags: function () {
    $.ajax({
      type: "GET",
      url: "api/tags?featured=true",
      success: function (tags) {
        ApiActions.receiveFeaturedTags(tags);
      }
    });
  },

  fetchTaggedRecipes: function (tagId) {
    $.ajax({
      type: "GET",
      url: "api/tags/" + tagId,
      success: function (data) {
        ApiActions.receiveRecipesList(data.recipes);
        ApiActions.receiveIndexedTag(data.tag);
      }
    });
  },

  createRecipeSave: function (recipeId) {
    $.ajax({
      type: "POST",
      url: "api/recipe_saves",
      data: { recipe_id: recipeId },
      dataType: "json",
      success: function (recipeSave) {
        ApiActions.receiveSingleRecipeSave(recipeSave);
      }
    });
  },

  destroyRecipeSave: function (recipeSaveId) {
    $.ajax({
      type: "DELETE",
      url: "api/recipe_saves/" + recipeSaveId,
      success: function (recipeId) {
        ApiActions.receiveDeletedSaveRecipeId(recipeId);
      },
      error: function (data) {
        console.log("you cannot delete that recipe save");
      }
    });
  },

  // fetchAllRecipeSaves: function () {
  //   if (!SessionStore.loggedIn) {
  //     return;
  //   }
  //   $.ajax({
  //     type: "GET",
  //     url: "api/recipe_saves",
  //     success: function (recipeSaves) {
  //       ApiActions.receiveAllRecipeSaves(recipeSaves);
  //     }
  //   });
  // },

  fetchSingleRecipeSave: function (recipeId) {
    if (!SessionStore.loggedIn) {
      return;
    }
    $.ajax({
      type: "GET",
      url: "api/recipes/" + recipeId + "/recipe_saves",
      success: function (recipeSave) {
        ApiActions.receiveSingleRecipeSave(recipeSave);
      }
    });
  },

  createCook: function (recipeId) {
    $.ajax({
      type: "POST",
      url: "api/cooks",
      data: { recipe_id: recipeId },
      dataType: "json",
      success: function (cook) {
        ApiActions.receiveSingleCook(cook);
      }
    });
  },

  destroyCook: function (cookId) {
    $.ajax({
      type: "DELETE",
      url: "api/cooks/" + cookId,
      success: function (recipeId) {
        ApiActions.receiveDeletedCookedRecipeId(recipeId);
      },
      error: function (data) {
        console.log("you cannot delete that recipe save");
      }
    });
  },

  // fetchAllCookedRecipes: function () {
  //   if (!SessionStore.loggedIn) {
  //     return;
  //   }
  //   $.ajax({
  //     type: "GET",
  //     url: "api/cooks",
  //     success: function (cooks) {
  //       ApiActions.receiveAllCookedRecipes(cooks);
  //     }
  //   });
  // },

  fetchSingleCookedRecipe: function (recipeId) {
    if (!SessionStore.loggedIn) {
      return;
    }
    $.ajax({
      type: "GET",
      url: "api/cooks?recipe_id=" + recipeId,
      success: function (cook) {
        ApiActions.receiveSingleCook(cook);
      }
    });
  },

  createRating: function (recipeId, score) {
    $.ajax({
      type: "POST",
      url: "api/ratings",
      dataType: "json",
      data: { rating: {
        recipe_id: recipeId,
        score: score
      }},
      success: function (ratings) {
        ApiActions.receiveUserRatings(ratings);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchRecipeRatings: function (recipeId) {
    $.ajax({
      type: "GET",
      url: "api/recipes/" + recipeId + "/ratings",
      success: function (ratings) {
        ApiActions.receiveRecipeRatings(ratings);
      }
    });
  },

  createNote: function (recipeId, note) {
    $.ajax({
      type: "POST",
      url: "api/notes",
      data: { note: {
        recipe_id: recipeId,
        body: note.body,
        private: note.private,
        parent_id: note.parentId
      }},
      dataType: "json",
      success: function (notes) {
        ApiActions.receiveAllNotes(notes);
      }
    });
  },

  fetchAllNotes: function (recipeId) {
    $.ajax({
      type: "GET",
      url: "api/recipes/" + recipeId + "/notes",
      success: function (notes) {
        ApiActions.receiveAllNotes(notes);
      }
    });
  },

  createNoteLike: function (noteId) {
    $.ajax({
      type: "POST",
      url: "api/note_likes",
      dataType: "json",
      data: { note_id: noteId },
      success: function (noteLike) {
        ApiActions.receiveUserNoteLike(noteLike);
      }
    });
  },

  destroyNoteLike: function (noteLikeId) {
    $.ajax({
      type: "DELETE",
      url: "api/note_likes/" + noteLikeId,
      success: function (noteId) {
        ApiActions.receiveDeletedLikeNoteId(noteId);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      type: "GET",
      url: "api/session",
      success: function (userData) {
        AuthActions.logInUser(userData.user);
        ApiActions.receiveAllRecipeSaves(userData.recipe_saves);
        ApiActions.receiveAllCookedRecipes(userData.recipe_cooks);
        ApiActions.receiveUserRatings(userData.ratings);
        ApiActions.receiveUserNoteLikes(userData.note_likes);
      },
      error: function (error) {
        console.log(error);
      }
    });
  },

  logInUser: function (credentials) {
    $.ajax({
      type: "POST",
      url: "api/session",
      dataType: "json",
      data: { user: credentials },
      success: function (userData) {
        AuthActions.logInUser(userData.user);
        ApiActions.receiveAllRecipeSaves(userData.recipe_saves);
        ApiActions.receiveAllCookedRecipes(userData.recipe_cooks);
        ApiActions.receiveUserRatings(userData.ratings);
        ApiActions.receiveUserNoteLikes(userData.note_likes);
      },
      error: function (error) {
        console.log(error);
      }
    });
  },

  logOutUser: function () {
    $.ajax({
      type: "DELETE",
      url: "api/session",
      dataType: "json",
      complete: function (response) {
        AuthActions.logOutUser();
        ApiActions.receiveAllRecipeSaves({});
        ApiActions.receiveAllCookedRecipes({});
        ApiActions.receiveUserRatings({});
      }
    });
  },

  signUpUser: function (credentials) {
    $.ajax({
      type: "POST",
      url: "api/users",
      dataType: "json",
      data: { user: credentials },
      success: function (response) {
        AuthActions.logOutUser();
        ApiActions.receiveAllRecipeSaves({});
        ApiActions.receiveAllCookedRecipes({});
        ApiActions.receiveUserRatings({});
      },
      error: function (error) {
        console.log(error);
      }
    });
  },

  updateUserData: function(userId, userData, callback) {
    $.ajax({
      url: '/api/users/' + userId,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: userData,
      success: function(updatedUserData) {
        AuthActions.logInUser(updatedUserData.user);
        callback && callback();
      }
    });
  }
};

module.exports = ApiUtil;
