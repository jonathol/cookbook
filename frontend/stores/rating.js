var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    RatingConstants = require('../constants/rating_constants');

var _userRatings = {};
var RatingStore = new Store(AppDispatcher);

RatingStore.addRating = function (rating) {
  $.extend(_userRatings, rating);
  this.__emitChange();
};

RatingStore.find = function (recipeId) {
  return _userRatings[recipeId];
};

RatingStore.resetUserRatings = function (ratings) {
  _userRatings = ratings;
  this.__emitChange();
};

RatingStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RatingConstants.USER_RATINGS_RECEIVED:
      this.resetUserRatings(payload.ratings);
      break;
    case RatingConstants.USER_RATING_RECEIVED:
      this.addRating(payload.rating);
      break;
  }
};

module.exports = RatingStore;
