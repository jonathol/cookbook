var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    ApiUtil = require('../util/api_util');

var RecipeDetail = React.createClass({
  componentDidMount: function () {
    var recipesListener = RecipeStore.addListener(this._recipesChanged);
  },

  componentWillUnmount: function () {
    recipesListener.remove();
  },

  getInitialState: function () {
    this.getRecipeFromStore();
  },

  getRecipeFromStore: function () {
    return { recipe: RecipeStore.featured() };
  },

  _recipesChanged: function () {
    this.setState(this.getRecipeFromStore());
  }
});

module.exports = RecipeDetail;
