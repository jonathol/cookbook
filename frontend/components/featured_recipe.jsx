var React = require('react'),
    RecipeStore = require('../stores/recipe');

var FeaturedRecipe = React.createClass({
  render: function () {
    if (!this.props.recipe.photo) {
      return <section className="featured"></section>;
    }

    return (
      <section
        className="featured-recipe">
        <img
          className="featured-recipe-photo"
          src={this.props.recipe.photo.large_url} />
      </section>
    )
  }
});

module.exports = FeaturedRecipe;
