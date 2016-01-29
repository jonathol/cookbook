var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeStore = require('../stores/recipe'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { recipes: [] };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    ApiUtil.fetchRecipeBox(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchRecipeBox(newProps.params.userId);
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
