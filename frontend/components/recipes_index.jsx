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
    this.recipesListener = RecipeStore.addListener(this._recipesChanged);
    this.savesListener = RecipeSaveStore.addListener(this._recipeSavesChanged);
    this.cooksListener = CookStore.addListener(this._cooksChanged);

    this.updateStateWithProps(this.props);
  },

  componentWillUnmount: function () {
    this.recipesListener.remove();
    this.savesListener.remove();
    this.cooksListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.updateStateWithProps(newProps);
  },

  _cooksChanged: function () {
    this.setState({ cooks: CookStore.all() });
  },

  _recipesChanged: function () {
    this.setState({ recipes: RecipeStore.all() });
  },

  _recipeSavesChanged: function () {
    this.setState({ recipeSaves: RecipeSaveStore.all() });
  },

  updateStateWithProps: function (props) {
    this.updateRecipesWithProps(props);
    ApiUtil.fetchAllRecipeSaves();
    ApiUtil.fetchAllCookedRecipes();
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

  render: function () {
    var recipes = this.state.recipes.map(function(recipe, idx) {
      return (
        <RecipeIndexItem
          key={idx}
          recipe={recipe}
          recipeSave={this.state.recipeSaves[recipe.id]}
          cooked={this.state.cooks[recipe.id]}
          enforceAuth={this.props.enforceAuth} />
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
