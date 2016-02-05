var React = require('react'),
    RecipeStore = require('../stores/recipe')
    ;

var FeaturedRecipe = React.createClass({
  handleWindowResize: function () {
    var imageHeight = $('.featured-recipe-photo').height();
    if (imageHeight === null) {
      var origHeight = this.props.recipe.photo.original_height;
      var origWidth = this.props.recipe.photo.original_width;
      imageHeight = ($(window).width() / origWidth) * origHeight;
    }
    var windowHeight = $(window).height();

    var recipePhotoAnchor = ((windowHeight * 0.92) - imageHeight);

    if (recipePhotoAnchor >= 0 && imageHeight !== null) {
      $(".featured-recipe").css('min-height', imageHeight + "px");
      $('.featured-recipe-photo').css('top', "0px");
    } else if (imageHeight === null && this.origImageHeight) {

    } else {
      $('.featured-recipe').css('min-height', windowHeight * 0.92 + "px");
      $('.featured-recipe-photo').css('top', recipePhotoAnchor + "px");
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
        <img
          className="featured-recipe-photo"
          src={this.props.recipe.photo.large_url} />
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
