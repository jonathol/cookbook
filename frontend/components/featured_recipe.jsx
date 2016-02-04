var React = require('react'),
    RecipeStore = require('../stores/recipe');

var FeaturedRecipe = React.createClass({
  componentDidMount: function () {
    var originalWindowHeight = $(window).height();
    var originalWindowWidth = $(window).width();
    var handleWindowResize = function () {
      var imageHeight = $('.featured-recipe-photo').height();
      var windowHeight = $(window).height();
      // var width = $('.featured-recipe-photo').data('original-width') || this.originalWidth;
      // var height = $('.featured-recipe-photo').data('original-height') || this.originalHeight;



      // var oldTop = $('.featured-recipe-photo').css('top') || 0;
      var newHeight = $(window).height();
      var newWidth = $(window).width();
      // $('.featured-recipe-photo').css('top', (oldTop - (oldWidth - newWidth) + "px"));
      var recipePhotoAnchor = ((windowHeight * 0.85) - imageHeight);
      var posOfImageBottom = recipePhotoAnchor + imageHeight;
      // debugger
      if (recipePhotoAnchor >= 0) {
        $(".featured-recipe").css('min-height', imageHeight + "px");
        $('.featured-recipe-photo').css('top', "0px");
      } else {
        $('.featured-recipe').css('min-height', windowHeight * 0.85 + "px");
        $('.featured-recipe-photo').css('top', recipePhotoAnchor + "px");
      }



    }.bind(this);

    // $('.featured-recipe').css('min-height', originalWindowHeight * 0.85);
    // $('.featured-recipe-photo').css('top', (originalWindowHeight * 0.85) - originalImageHeight);

    // debugger
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
