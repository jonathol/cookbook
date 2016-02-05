var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user');

var _user = {};

var UserStore = new Store(AppDispatcher);

UserStore.user = function () {
  return $.extend({}, _user);
};

UserStore.resetUser = function (user) {
  _user = user;
  this.__emitChange();
};


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_INFO_RECEIVED:
      this.resetUser(payload.user);
  }
};

module.exports = UserStore;
