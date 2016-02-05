var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    SearchConstants = require('../constants/search_constants');

var _instantSearchResuls = [];
var _fullPageSearchResults = [];

var SearchStore = new Store (AppDispatcher);

SearchStore.instantResults = function () {
  return _instantSearchResuls.slice(0);
};

SearchStore.fullPageResults = function () {
  return _fullPageSearchResults.slice(0);
};

SearchStore.resetInstantResults = function (results) {
  _instantSearchResuls = results;
  this.__emitChange();
};

SearchStore.resetFullPageResults = function (results) {
  _fullPageSearchResults = [];
  this.__emitChange();
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.INSTANT_SEARCH_RESULTS_RECEIVED:
      this.resetInstantResults(payload.results);
      break;
    case SearchConstants.FULL_PAGE_SEARCH_RESULTS_RECEIVED:
      this.resetFullPageResults(payload.results);
      break;
  }
};

module.exports = SearchStore;
