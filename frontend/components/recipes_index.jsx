var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    RecipeSaveStore = require('../stores/recipe_save'),
    CookStore = require('../stores/cook'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  getInitialState: function () {
    return { recipeSaves: {}, cooks: {} };
  },

  componentDidMount: function () {
    this.savesListener = RecipeSaveStore.addListener(this._recipeSavesChanged);
    this.cooksListener = CookStore.addListener(this._cooksChanged);

    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.savesListener.remove();
    this.cooksListener.remove();
  },

  _cooksChanged: function () {
    this.setState({ cooks: CookStore.all() });
  },

  _recipeSavesChanged: function () {
    this.setState({ recipeSaves: RecipeSaveStore.all() });
  },

  render: function () {
    var recipes = this.props.recipes.map(function(recipe, idx) {
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
      <section
        className="recipes-index">
        <h3>{this.props.indexDescription}</h3>
        <ul
          className="recipes-index-list group">
          {recipes}
        </ul>
      </section>
    );
  }
});
