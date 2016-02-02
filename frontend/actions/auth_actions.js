var AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

module.exports = {
  logInUser: function (user) {
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_IN,
      user: user,
    });
  },

  logOutUser: function () {
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_OUT
    });
  }
};
