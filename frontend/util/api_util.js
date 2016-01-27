var ApiActions = require('../actions/api_actions');

var Recipe = {
  fetchAllRecipes: function () {
    $.ajax({
      type: "GET",
      url: "api/recipes",
      success: function (recipes) {
        ApiActions.receiveAllRecipes(recipes);
      }
    });
  },

  logInUser: function (email, password) {
    $.ajax({
      type: "POST",
      url: "session",
      dataType: "json",
      data: { email: email, password: password },
      success: function (response) {
        AuthActions.loginUser(response.session_token);
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
};

module.exports = ApiUtil;
