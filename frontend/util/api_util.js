var ApiActions = require('../actions/api_actions');

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
        debugger
        AuthActions.loginUser(response.session_token);
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
};

module.exports = ApiUtil;
