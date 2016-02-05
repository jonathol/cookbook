var React = require('react'),
    ApiUtil = require('../util/api_util'),
    FeaturedRecipe = require('./featured_recipe'),
    RecipesIndex = require('./recipes_index'),
    RecipeStore = require('../stores/recipe');

var FeaturedContent = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      recipe: RecipeStore.featured(),
      recipesList: RecipeStore.all()
    };
  },

  componentDidMount: function () {
    this.recipesListener = RecipeStore.addListener(this._recipesChanged);

    ApiUtil.fetchFeaturedRecipes();
  },

  componentWillUnmount: function () {
    this.recipesListener.remove();
  },

  _recipesChanged: function () {
    this.setState(this.getStateFromStore());
  },

  render: function () {
    if (!this.state.recipe.id) {
      return <section className="featured-content"></section>;
    }

    return (
      <section
        className="featured-content">
        <FeaturedRecipe
          recipe={this.state.recipe}
          enforceAuth={this.props.enforceAuth} />
        <RecipesIndex
          recipes={this.state.recipesList}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = FeaturedContent;
