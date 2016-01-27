var AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants'),
    RouterUtil = require('../util/router_util');

module.exports = {
  logInUser: function (token) {
    RouterUtil.redirectToIndex();
    // debugger
    localStorage.setItem('session_token', token);
    AppDispatcher.dispatch({
      actionType: AuthConstants.USER_LOGGED_IN,
      token: token,
    });
  }
};
