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

  logInUser: function (credentials) {
    $.ajax({
      type: "POST",
      url: "api/session",
      dataType: "json",
      data: { user: credentials },
      success: function (response) {
        AuthActions.logInUser(response.session_token, response.user);
      },
      error: function (error) {
        console.log(error);
      }
    });
  },

  logOutUser: function () {
    var token = SessionStore.token();
    $.ajax({
      type: "DELETE",
      url: "api/session",
      dataType: "json",
      data: { session_token: token },
      success: function (response) {
        AuthActions.logOutUser();
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
};

module.exports = ApiUtil;
