var React = require('react'),
    RecipeStore = require('../stores/recipe');

var FeaturedRecipe = React.createClass({
  handleWindowResize: function () {
    var recipePhoto = $('.featured-recipe-photo');
    var photoContainer = $('.featured-recipe-photo-container');

    var imageHeight = recipePhoto.height();
    if (imageHeight === null) {
      var origHeight = this.props.recipe.photo.original_height;
      var origWidth = this.props.recipe.photo.original_width;
      imageHeight = ($(window).width() / origWidth) * origHeight;
    }

    var cardHeight = $('.featured-recipe-card').outerHeight();

    if (imageHeight < 375 && photoContainer.width() >= $(window).width()) {
      // recipePhoto.css('min-height', '375px');
      photoContainer.css('width', recipePhoto.outerWidth());
    } else {
      photoContainer.css('width', '100%');
    }
    var windowHeight = $(window).height();

    var recipePhotoAnchor = ((windowHeight * 0.9) - imageHeight);

    if (recipePhotoAnchor >= 0 && imageHeight !== null) {
      $(".featured-recipe").css('min-height', imageHeight + "px");
      recipePhoto.css('top', "0px");
    } else {
      $('.featured-recipe').css('min-height', windowHeight * 0.9 + "px");
      recipePhoto.css('top', recipePhotoAnchor + "px");
    }
  },

  componentDidMount: function () {
    $(window).resize(this.handleWindowResize);

    if (!this.props.recipe.photo.large_original_height) {
      var recipePhoto = new Image();
      recipePhoto.onload = function () {
        this.handleWindowResize();
      }.bind(this);
      recipePhoto.src = this.props.recipe.photo.large_url;
    }
  },

  componentWillUnmount: function () {
    $(window).off('resize');
  },

  render: function () {
    if (!this.props.recipe.photo) {
      return <section className="featured-recipe"></section>;
    }

    return (
      <section
        className="featured-recipe group">
        <a href={"#/recipes/" + this.props.recipe.id}>
        <div
          className="featured-recipe-photo-container">
          <img
            className="featured-recipe-photo"
            src={this.props.recipe.photo.large_url} />
        </div>
        <div
          className="featured-recipe-card">
          <div
            className="featured-recipe-info">
            <div
              className="rotd-pin">
              <span>Recipe<br /> of the Day</span>
            </div>
            <h5>{this.props.recipe.title}</h5>
            <p>{this.props.recipe.description}</p>
            <div
              className="featured-recipe-author-info">
              <img src={this.props.recipe.author.photo_url} />
              <span>{this.props.recipe.author.name}</span>
            </div>
          </div>
        </div>
        </a>
      </section>
    )
  }
});

module.exports = FeaturedRecipe;
