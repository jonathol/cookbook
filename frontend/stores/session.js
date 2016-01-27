var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    AuthConstants = require('../constants/auth_constants');

var AuthStore = new Store(AppDispatcher);

var _user, _token;

AuthStore.loggedIn = function () {
  return !!_user;
};

AuthStore.token = function () {
  return _token;
};

AuthStore.user = function () {
  return _user;
};

AuthStore.resetUser = function (user, token) {
  _user = user;
  _token = token;
  AuthStore.__emitChange();
};

AuthStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AuthConstants.USER_LOGGED_IN:
      AuthStore.resetUser(payload.user, payload.token);
      break;
  }
};


module.exports = AuthStore;
