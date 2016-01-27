var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { recipes: RecipeStore.all() };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    ApiUtil.fetchAllRecipes();
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
  },

  _recipesChanged: function () {
    this.setState({ recipes: RecipeStore.all() });
  },

  render: function () {
    var recipes = this.state.recipes.map(function(recipe, idx) {
      return (
        <RecipeIndexItem key={idx} recipe={recipe} />
      );
    });

    return (
      <ul
        className="recipes-index-list">
        {recipes}
      </ul>
    );
  }
});
