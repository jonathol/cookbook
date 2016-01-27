var AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

module.exports = {
  logInUser: function (token) {
    AppDispatcher.dispatch({
      actionType: LOG_IN_USER,
      token: token
    });
  }
};
