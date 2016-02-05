var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeStore = require('../stores/recipe'),
    RecipesIndex = require('./recipes_index'),
    UserStore = require('../stores/user');

var RecipeBox = React.createClass({
  getInitialState: function () {
    return {
      recipeList: RecipeStore.all(),
      user: UserStore.user()
    };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    this.userListener = UserStore.addListener(this._userChanged);
    ApiUtil.fetchRecipeBox(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
    this.userListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchRecipeBox(newProps.params.userId);
  },

  _recipesChanged: function () {
    this.setState({ recipeList: RecipeStore.all() });
  },

  _userChanged: function () {
    this.setState({ user: UserStore.user() });
  },

  render: function () {
    return (
      <section
        className="recipe-box">
        <RecipesIndex
          recipes={this.state.recipeList}
          indexDescription={this.state.user.name + "'s saved recipes"}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = RecipeBox;
