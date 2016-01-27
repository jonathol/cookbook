var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    jwt = require('jsonwebtoken'),
    AuthConstants = require('../constants/auth_constants');

var SessionStore = new Store(AppDispatcher);

var _userId, _token;

SessionStore.loggedIn = function () {
  return !!_userId;
};

SessionStore.token = function () {
  return _token;
};

SessionStore.userId = function () {
  return _userId;
};

SessionStore.resetUser = function (token) {
  _token = token;
  _userId = jwt.decode(_token).user_id;
  this.__emitChange();
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AuthConstants.USER_LOGGED_IN:
      this.resetUser(payload.token);
      break;
  }
};


module.exports = SessionStore;
