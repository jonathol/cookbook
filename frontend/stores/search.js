var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    SearchConstants = require('../constants/search_constants');

var _instantSearchResults = [];
var _fullPageSearchResults = [];
var _query = "";

var SearchStore = new Store (AppDispatcher);

SearchStore.instantResults = function () {
  return _instantSearchResults.slice(0);
};

SearchStore.fullPageResults = function () {
  return _fullPageSearchResults.slice(0);
};

SearchStore.query = function () {
  return _query;
};

SearchStore.resetInstantResults = function (results) {
  _instantSearchResuls = results;
  this.__emitChange();
};

SearchStore.resetFullPageResults = function (search) {
  _query = search.query;
  _fullPageSearchResults = search.results;
  this.__emitChange();
};

SearchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SearchConstants.INSTANT_SEARCH_RESULTS_RECEIVED:
      this.resetInstantResults(payload.results);
      break;
    case SearchConstants.FULL_PAGE_SEARCH_RESULTS_RECEIVED:
      this.resetFullPageResults(payload.search);
      break;
  }
};

module.exports = SearchStore;
