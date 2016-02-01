var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    RatingConstants = require('../constants/rating_constants');

var _ratings = {};
var RatingStore = new Store(AppDispatcher);

RatingStore.ratings = function () {
  return $.extend({}, _ratings);
};

RatingStore.addRating = function (rating) {
  _ratings = {
    average: Math.round(_ratings.average + (rating.score / _ratings.count + 1)),
    count: _ratings.count + 1
  };

  this.__emitChange();
};

RatingStore.resetRatings = function (ratings) {
  _ratings = ratings;
  this.__emitChange();
};

RatingStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RatingConstants.RATINGS_RECEIVED:
      this.resetRatings(payload.ratings);
      break;
    case RatingConstants.RATING_RECEIVED:
      this.addRating(payload.rating);
      break;
  }
};

module.exports = RatingStore;
