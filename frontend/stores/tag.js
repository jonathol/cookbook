var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    TagConstants = require('../constants/tag_constants');

var _featuredTags = [],
    _indexedTag = {};

var TagStore = new Store(AppDispatcher);

TagStore.indexed = function () {
  return $.extend({}, _indexedTag);
};

TagStore.featured = function () {
  return _featuredTags.slice(0);
};

TagStore.resetIndexed = function (tag) {
  _indexedTag = tag;
  this.__emitChange();
};

TagStore.resetFeatured = function (tag) {
  _featuredTags = tags;
  this.__emitChange();
};


TagStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case TagConstants.FEATURED_TAGS_RECEIVED:
      this.resetFeatured(payload.tags);
      break;
    case TagConstants.INDEXED_TAG_RECEIVED:
      this.resetIndexed(payload.tag);
      break;
  }
};

module.exports = TagStore;
