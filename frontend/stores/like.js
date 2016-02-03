var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    LikeConstants = require('../constants/like_constants');

var _userLikes = {};
var LikeStore = new Store(AppDispatcher);

LikeStore.all = function () {
  return $.extend({}, _userLikes);
};

LikeStore.addLike = function (like) {
  $.extend(_userLikes, like);
  this.__emitChange();
};

LikeStore.find = function (noteId) {
  return _userLikes[noteId];
};

LikeStore.removeLike = function (noteId) {
  _userLikes[noteId] = undefined;
  this.__emitChange();
};

LikeStore.resetLikes = function (likes) {
  _userLikes = likes;
  this.__emitChange();
};

LikeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKES_RECEIVED:
      this.resetLikes(payload.noteLikes);
      break;
    case LikeConstants.LIKE_RECEIVED:
      this.addLike(payload.noteLike);
      break;
    case LikeConstants.DELETED_LIKE_NOTE_ID_RECEIVED:
      this.removeLike(payload.noteId);
      break;
  }
};

module.exports = LikeStore;
