var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    RecipeSaveStore = require('../stores/recipe_save'),
    CookStore = require('../stores/cook'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { recipes: [], recipeSaves: {}, cooks: {} };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    this.saveListener = RecipeSaveStore.addListener(this._recipeSavesChanged);
    this.cookListener = CookStore.addListener(this._cooksChanged);

    this.updateRecipesWithProps(this.props);
    ApiUtil.fetchAllRecipeSaves();
    ApiUtil.fetchAllCookedRecipes();
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
    this.saveListener.remove();
    this.cookListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.updateRecipesWithProps(newProps);
  },

  _cooksChanged: function () {
    this.setState({ cooks: CookStore.all() });
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
        <RecipeIndexItem
          key={idx}
          recipe={recipe}
          recipeSave={this.state.recipeSaves[recipe.id]}
          cooked={this.state.cooks[recipe.id]} />
      );
    }.bind(this));

    return (
      <ul
        className="recipes-index-list">
        {recipes}
      </ul>
    );
  }
});
