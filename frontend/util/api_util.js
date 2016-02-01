var ApiActions = require('../actions/api_actions'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session');

var ApiUtil = {
  fetchAllRecipes: function () {
    $.ajax({
      type: "GET",
      url: "api/recipes",
      success: function (recipes) {
        ApiActions.receiveAllRecipes(recipes);
      }
    });
  },

  fetchAuthoredRecipes: function (userId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + userId + "/recipes",
      success: function (recipes) {
        ApiActions.receiveAllRecipes(recipes);
      }
    });
  },

  fetchFeaturedRecipe: function (recipeId) {
    $.ajax({
      type: "GET",
      url: "api/recipes/" + recipeId,
      success: function (recipe) {
        ApiActions.receiveFeaturedRecipe(recipe);
      }
    });
  },

  fetchRecipeBox: function (userId) {
    $.ajax({
      type: "GET",
      url: "api/users/" + userId + "/recipe_box",
      success: function (recipeBox) {
        ApiActions.receiveRecipeBox(recipeBox);
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

  fetchAllRecipeSaves: function () {
    if (!SessionStore.loggedIn) {
      return;
    }
    $.ajax({
      type: "GET",
      url: "api/recipe_saves",
      success: function (recipeSaves) {
        ApiActions.receiveAllRecipeSaves(recipeSaves);
      }
    });
  },

  fetchSingleRecipeSave: function (recipeId) {
    if (!SessionStore.loggedIn) {
      return;
    }
    $.ajax({
      type: "GET",
      url: "api/recipe_saves?recipe_id=" + recipeId,
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

  fetchAllCookedRecipes: function () {
    if (!SessionStore.loggedIn) {
      return;
    }
    $.ajax({
      type: "GET",
      url: "api/cooks",
      success: function (cooks) {
        ApiActions.receiveAllCookedRecipes(cooks);
      }
    });
  },

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

  fetchRatings: function (recipeId) {
    $.ajax({
      type: "GET",
      url: "api/ratings?recipe_id=" + recipeId,
      success: function (ratings) {
        ApiActions.receiveRatings(ratings);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      type: "GET",
      url: "api/session",
      success: function (response) {
        if (!response.session_token) {
          return;
        }
        AuthActions.logInUser(response.session_token);
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
      success: function (response) {
        AuthActions.logInUser(response.session_token);
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
        AuthActions.logInUser(response.session_token);
      },
      error: function (error) {
        console.log(error);
      }
    });
  },
};

module.exports = ApiUtil;
