var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    RecipeSaveStore = require('../stores/recipe_save'),
    CookStore = require('../stores/cook'),
    RatingStore = require('../stores/rating'),
    NoteStore = require('../stores/note'),
    ApiUtil = require('../util/api_util'),
    Icon = require('react-fontawesome'),
    Notes = require('./notes');

var RecipeDetail = React.createClass({
  getInitialState: function () {
    return { notes: NoteStore.all() };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipeChanged);
    this.saveListener = RecipeSaveStore.addListener(this._recipeSaveChanged);
    this.cookListener = CookStore.addListener(this._cookChanged);
    this.ratingListener = RatingStore.addListener(this._ratingsChanged);
    this.noteListener = NoteStore.addListener(this._notesChanged);

    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchRecipeDetails(this.props.params.recipeId);
    ApiUtil.fetchAllNotes(this.props.params.recipeId);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
    this.saveListener.remove();
    this.cookListener.remove();
    this.ratingListener.remove();
    this.noteListener.remove();
  },

  _cookChanged: function () {
    this.setState({ cooked: CookStore.find(this.props.params.recipeId) });
  },

  _notesChanged: function () {
    this.setState({ notes: NoteStore.all() });
  },

  _ratingsChanged: function () {
    this.setState({ rating: RatingStore.find(this.props.params.recipeId) });
  },

  _recipeChanged: function () {
    this.setState({ recipe: RecipeStore.detailed() });
  },

  _recipeSaveChanged: function () {
    this.setState({ recipeSave: RecipeSaveStore.find(this.props.params.recipeId) });
  },

  handleClickCooked: function (e) {
    if (!this.props.enforceAuth()) {
      return;
    } else if (this.state.cooked) {
      ApiUtil.destroyCook(this.state.cooked);
    } else {
      ApiUtil.createCook(this.state.recipe.id);
    }
  },

  handleClickRate: function (e) {
    if (!this.props.enforceAuth()) {
      return;
    } else {
      ApiUtil.createRating(this.state.recipe.id, e.target.getAttribute("value"));
    }
  },

  handleClickSave: function (e) {
    if (!this.props.enforceAuth()) {
      return;
    } else if (this.state.recipeSave) {
      ApiUtil.destroyRecipeSave(this.state.recipeSave);
    } else {
      ApiUtil.createRecipeSave(this.state.recipe.id);
    }
  },

  render: function () {
    if (!this.state || !this.state.recipe) {
      return (
        <section className="recipe-show missing-recipe"></section>
      );
    }

    var isSavedIcon = <Icon
      name="bookmark" className="save-button-icon recipe-button-icon" />;
    var notSavedIcon = <Icon
      name="bookmark-o" className="save-button-icon recipe-button-icon" />;
    var saveIcon = this.state.recipeSave ? isSavedIcon : notSavedIcon;
    var saveText = this.state.recipeSave ? "Saved" : "Save";


    var recipeDescription;
    var noDescription;
    if (this.state.recipe.description) {
      recipeDescription = (
        <p
          className="recipe-description-text">
          {this.state.recipe.description}
        </p>
      )
    } else {
      noDescription = " no-description-text"
    }

    var tags = this.state.recipe.tags.map(function (tag, idx) {
      if (idx === this.state.recipe.tags.length - 1) {
        return <li key={idx}><a href={"#/tags/" + tag.id}>{tag.name}</a></li>;
      } else {
        return <li key={idx}><a href={"#/tags/" + tag.id}>{tag.name}</a>, </li>;
      }
    }.bind(this));

    var checked = this.state.cooked ? " checked" : "";

    var rating = this.state.rating || this.state.recipe.ratings.average
    var rated = this.state.rating ? " rated" : "";

    var ratingStars = [1,2,3,4,5].map(function (num) {
      var filled = num <= rating ? " filled" : "";

      return (
        <li
          className={"rating-star star-" + num + filled + rated}
          key={num}
          value={num}>
          <Icon name="star" value={num} />
        </li>
      );
    }.bind(this));

    var ingredients = this.state.recipe.ingredients.map(function (ingredient, idx) {
      return (
        <li key={idx} className="ingredient">
          <span className="ingredient-quantity">
            {ingredient.quantity}
          </span>
          <span className="ingredient-name">
            {ingredient.name}
          </span>
        </li>
      );
    });

    var steps = this.state.recipe.steps.map(function (step, idx) {
      return (
        <li key={idx} className="preparation-step">
          <span className="step-number">
            Step {step.step_number}
          </span>
          <p className="step-body">
            {step.description}
          </p>
        </li>
      );
    });

    return (
      <section
        className="recipe-show">
        <article className="recipe-article">
          <div
            className="recipe-save-button recipe-button"
            onClick={this.handleClickSave}>
            <div
              className="recipe-button-icon-text">
              {saveIcon}
              <span className="recipe-button-text">{saveText}</span>
            </div>
          </div>
          <section className="recipe-top-details">
            <h2
              className="recipe-feature-title">
              {this.state.recipe.title}
            </h2>
            <div
              className="basic-recipe-info">
              <h3
                className="recipe-detail-author">
                <a href={"#/users/" + this.state.recipe.author.id}>
                  <img src={this.state.recipe.author.photo_url} />
                  {this.state.recipe.author.name}
                </a>
              </h3>
              <p
                className="recipe-detail-more-info">
                <span
                  className="detail-cook-time">
                  <Icon name="clock-o" className="detail-icon" />
                  {this.state.recipe.cook_time}
                </span>
                <span
                  className="detail-servings">
                  <Icon name="user" className="detail-icon" />
                  {this.state.recipe.servings}
                </span>
              </p>
            </div>
            <section className="recipe-description group">
              <div className={"recipe-photo-box group" + noDescription}>
                <div className="photo-container">
                  <img src={this.state.recipe.photo.large_url} />
                </div>
                <a
                  className="recipe-photo-credit"
                  href={this.state.recipe.photo.large_url}>
                  Photo from {this.state.recipe.photo.credit} on Flickr
                </a>
              </div>
              {recipeDescription}
            </section>
          </section>
          <section className="recipe-middle-details group">
            <ul className="recipe-tags">
              {tags}
            </ul>
            <ul className="recipe-ratings-cooked">
              <li
                className="recipe-cooked">
                <div
                  className="detail-cooked-button"
                  onClick={this.handleClickCooked}>
                  <Icon name="check" className={checked} />
                  <p className="cooked-text">Cooked</p>
                </div>
              </li>
              <li className="recipe-ratings">
                <div className="ratings-button">
                  <p className={"ratings-text" + rated}>
                    {this.state.recipe.ratings.count} ratings
                  </p>
                  <ul
                    className="rating-stars group"
                    onClick={this.handleClickRate}>
                    {ratingStars}
                  </ul>
                </div>
              </li>
            </ul>
            <section className="user-interaction">

            </section>
          </section>
          <section className="recipe-bottom-details group">
            <section className="recipe-ingredients">
              <h4 className="recipe-bottom-details-header">
                Ingredients
              </h4>
              <ul className="ingredients-list">
                {ingredients}
              </ul>
            </section>
            <section className="details-bottom-right-column">
              <section className="recipe-steps">
                <h4 className="recipe-bottom-details-header">
                  Preparation
                </h4>
                <ul className="preparation-steps-list">
                  {steps}
                </ul>
              </section>
              <Notes
                notes={this.state.notes}
                recipeId={this.state.recipe.id}
                enforceAuth={this.props.enforceAuth} />
            </section>
          </section>
        </article>
      </section>
    );
  }
});

module.exports = RecipeDetail;
