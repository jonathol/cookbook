var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    CookConstants = require('../constants/cook_constants');

var _cooks = {};
var CookStore = new Store(AppDispatcher);

CookStore.all = function () {
  return $.extend({}, _cooks);
};

CookStore.addCook = function (cook) {
  $.extend(_cooks, cook);
  this.__emitChange();
};

CookStore.removeCook = function (recipeId) {
  _cooks[recipeId] = undefined;
  this.__emitChange();
};

CookStore.resetCooks = function (cooks) {
  _cooks = cooks;
  this.__emitChange();
};

CookStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CookConstants.COOKS_RECEIVED:
      this.resetCooks(payload.cooks);
      break;
    case CookConstants.COOK_RECEIVED:
      this.addCook(payload.cook);
      break;
    case CookConstants.DELETED_COOKED_RECIPE_ID_RECEIVED:
      this.removeCook(payload.recipeId);
      break;
  }
};

module.exports = CookStore;
