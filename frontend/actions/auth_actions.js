var AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

module.exports = {
  logInUser: function (token) {
    localStorage.setItem('session_token', token);

    AppDispatcher.dispatch({
      actionType: AuthConstants.LOG_IN_USER,
      token: token
    });
  }
};
