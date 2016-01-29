var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { recipes: [] };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    this.updateRecipesWithProps(this.props);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.updateRecipesWithProps(newProps);
  },

  updateRecipesWithProps: function (props) {
    if (props.route.path === "recipe-box") {
      ApiUtil.fetchRecipeBox(props.params.userId);
    } else if (props.route.path === "my-recipes") {
      ApiUtil.fetchAuthoredRecipes(props.params.userId);
    } else {
      ApiUtil.fetchAllRecipes();
    }
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
