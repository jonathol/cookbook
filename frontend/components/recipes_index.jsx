var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    RecipeSaveStore = require('../stores/recipe_save'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { recipes: [], recipeSaves: [] };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    this.recipeSaveListener = RecipeSaveStore.addListener(this._recipesChanged);
    this.updateRecipesWithProps(this.props);
    ApiUtil.fetchAllRecipeSaves();
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
    this.recipeSaveListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.updateRecipesWithProps(newProps);
  },

  updateRecipesWithProps: function (props) {
    switch (props.route.path) {
      case "recipe-box":
        ApiUtil.fetchRecipeBox(props.params.userId);
        break;
      case "my-recipes":
        ApiUtil.fetchAuthoredRecipes(props.params.userId);
        break;
      default:
        ApiUtil.fetchAllRecipes();
    }
  },

  _recipesChanged: function () {
    this.setState({ recipes: RecipeStore.all() });
  },

  _recipeSavesChanged: function () {
    this.setState({ recipeSaves: RecipeSaveStore.all() });
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
