var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    jwt = require('jsonwebtoken'),
    AuthConstants = require('../constants/auth_constants');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};

SessionStore.loggedIn = function () {
  return !!_currentUser.id;
};

SessionStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

SessionStore.logInUser = function (user) {
  _currentUser = user;
  this.__emitChange();
};

SessionStore.logOutUser = function () {
  _currentUser = {};
  this.__emitChange();
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AuthConstants.USER_LOGGED_IN:
      this.logInUser(payload.user);
      break;
    case AuthConstants.USER_LOGGED_OUT:
      this.logOutUser();
      break;
  }
};


module.exports = SessionStore;
