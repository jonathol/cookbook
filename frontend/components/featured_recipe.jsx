var React = require('react'),
    RecipeStore = require('../stores/recipe');

var FeaturedRecipe = React.createClass({
  componentDidMount: function () {
    var handleWindowResize = function () {
      var imageHeight = $('.featured-recipe-photo').height();
      var windowHeight = $(window).height();

      var recipePhotoAnchor = ((windowHeight * 0.85) - imageHeight);
      if (recipePhotoAnchor >= 0) {
        $(".featured-recipe").css('min-height', imageHeight + "px");
        $('.featured-recipe-photo').css('top', "0px");
      } else {
        $('.featured-recipe').css('min-height', windowHeight * 0.85 + "px");
        $('.featured-recipe-photo').css('top', recipePhotoAnchor + "px");
      }
    }.bind(this);
    $(window).resize(handleWindowResize);

    handleWindowResize();
  },

  componentWillUnmount: function () {
  },

  render: function () {
    if (!this.props.recipe.photo) {
      return <section className="featured-recipe"></section>;
    }

    return (
      <section
        className="featured-recipe group">
        <img
          className="featured-recipe-photo"
          src={this.props.recipe.photo.large_url}
          data-original-width={this.originalWidth}
          data-original-height={this.originalHeight} />
      </section>
    )
  }
});

module.exports = FeaturedRecipe;
