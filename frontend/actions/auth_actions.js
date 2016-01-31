var AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

module.exports = {
  logInUser: function (token) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_IN,
      token: token,
    });
  },

  logOutUser: function () {
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_OUT
    });
  }
};
