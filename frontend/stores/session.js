var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

var SessionStore = new Store(AppDispatcher);

var _user, _token;

SessionStore.loggedIn = function () {
  return !!_user;
};

SessionStore.token = function () {
  return _token;
};

SessionStore.user = function () {
  return _user;
};

SessionStore.resetUser = function (user, token) {
  _user = user;
  _token = token;
  this.__emitChange();
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AuthConstants.USER_LOGGED_IN:
      this.resetUser(payload.user, payload.token);
      break;
  }
};


module.exports = SessionStore;
