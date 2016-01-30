var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeSaveConstants = require('../constants/recipe_save_constants');

var _recipeSaves = [];
var RecipeSaveStore = new Store(AppDispatcher);

RecipeSaveStore.all = function () {
  return _recipeSaves.slice(0);
};

RecipeSaveStore.resetRecipeSaves = function (recipeSaves) {
  _recipeSaves = recipeSaves;
  this.__emitChange();
};

RecipeSaveStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RecipeSaveConstants.RECIPE_SAVES_RECEIVED:
      this.resetRecipeSaves(payload.recipeSaves);
      break;
  }
};

module.exports = RecipeSaveStore;
