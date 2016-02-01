var SessionStore = require('../stores/session');

var AuthMixin = {
  ensureLoggedIn: function () {
    if (SessionStore.loggedIn) {
      return true;
    } else {
      
    }
  }
};
