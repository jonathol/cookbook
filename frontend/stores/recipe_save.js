var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    RecipeSaveConstants = require('../constants/recipe_save_constants');

var _recipeSaves = {};
var RecipeSaveStore = new Store(AppDispatcher);

RecipeSaveStore.all = function () {
  return $.extend({}, _recipeSaves);
};

RecipeSaveStore.addRecipeSave = function (recipeSave) {
  $.extend(_recipeSaves, recipeSave);
  this.__emitChange();
};

RecipeSaveStore.removeRecipeSave = function (recipeId) {
  _recipeSaves[recipeId] = undefined;
  this.__emitChange();
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
    case RecipeSaveConstants.RECIPE_SAVE_RECEIVED:
      this.addRecipeSave(payload.recipeSave);
      break;
    case RecipeSaveConstants.DELETED_SAVE_RECIPE_ID_RECEIVED:
      this.removeRecipeSave(payload.recipeId);
      break;
  }
};

module.exports = RecipeSaveStore;
