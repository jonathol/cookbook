var AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

module.exports = {
  logInUser: function (token) {
    localStorage.setItem('session_token', token);
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_IN,
      token: token,
    });
  },

  logOutUser: function () {
    debugger
    localStorage.setItem('session_token', null);
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_OUT
    });
  }
};
