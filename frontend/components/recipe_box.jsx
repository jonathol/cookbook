var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeStore = require('../stores/recipe'),
    RecipesIndex = require('./recipes_index');

var RecipeBox = React.createClass({
  getInitialState: function () {
    return {
      recipeList: RecipeStore.all()
    };
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
    this.setState({ recipeList: RecipeStore.all() });
  },

  render: function () {
    return (
      <section
        className="recipe-box">
        <RecipesIndex
          recipes={this.state.recipeList}
          indexDescription={this.props.user.name + "'s saved recipes"}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = RecipeBox;
