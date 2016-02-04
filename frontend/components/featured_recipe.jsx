var React = require('react'),
    RecipeStore = require('../stores/recipe');

var FeaturedRecipe = React.createClass({
  getInitialState: function () {
    return this.get
  },

  getRecipeFromStore: function () {
    return { recipe: RecipeStore.featured() };
  },

  render: function () {

  }
});

module.exports = FeaturedRecipe;
