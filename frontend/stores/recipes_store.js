var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher');

var _recipes = [];

var RecipeStore = new Store(AppDispatcher);

RecipeStore.all = function () {
  return _recipes.slice(0);
};

module.exports = RecipeStore;
