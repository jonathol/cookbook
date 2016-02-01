var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    RecipeSaveStore = require('../stores/recipe_save'),
    CookStore = require('../stores/cook'),
    ApiUtil = require('../util/api_util'),
    Icon = require('react-fontawesome');

var RecipeDetail = React.createClass({
  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipeChanged);
    this.saveListener = RecipeSaveStore.addListener(this._recipeSaveChanged);
    this.cookListener = CookStore.addListener(this._cookChanged);

    this.updateStateWithProps(this.props);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
    this.saveListener.remove();
    this.cookListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.updateStateWithProps(newProps);
  },

  _cookChanged: function () {
    this.setState({ cook: CookStore.find(this.props.params.recipeId) });
  },

  _recipeChanged: function () {
    this.setState({ recipe: RecipeStore.featured() });
  },

  _recipeSaveChanged: function () {
    this.setState({ recipeSave: RecipeSaveStore.find(this.props.params.recipeId) });
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

  updateStateWithProps: function (props) {
    ApiUtil.fetchFeaturedRecipe(props.params.recipeId);
    ApiUtil.fetchAllRecipeSaves();
    ApiUtil.fetchAllCookedRecipes();
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


    var recipeDescription = (
      <section className="recipe-description">
        <p
          className="recipe-description-text">
          {this.state.recipe.description}
        </p>
        <div className="recipe-photo-box">
          <div className="photo-container">
            <img src={this.state.recipe.photo.large_url} />
          </div>
          <a
            className="recipe-photo-credit"
            href={this.state.recipe.photo.large_url}>
            {this.state.recipe.photo.credit}
          </a>
        </div>
      </section>
    );

    var checked = this.props.cooked ? " checked" : "";

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
              <div className="recipe-photo-box group">
                <div className="photo-container">
                  <img src={this.state.recipe.photo.large_url} />
                </div>
                <a
                  className="recipe-photo-credit"
                  href={this.state.recipe.photo.large_url}>
                  Photo from {this.state.recipe.photo.credit} on Flickr
                </a>
              </div>
              <p
                className="recipe-description-text">
                {this.state.recipe.description}
              </p>
            </section>
          </section>
          <section className="recipe-middle-details">
            <ul className="recipe-tags">
              TAGS HERE
            </ul>
            <ul className="recipe-meta-data">
              <li className="recipe-cooked-button">
               <Icon name="check" className={"meta-data-icon" + checked} />
              </li>
              <ul className="recipe-ratings">
                Ratings
              </ul>
            </ul>
            <section className="user-interaction">

            </section>
          </section>
          <section className="recipe-directions group">
            <section className="recipe-ingredients">
              <h4>Ingredients</h4>
              <ul className="ingredients-list">
                {ingredients}
              </ul>
            </section>
            <section className="recipe-steps">
              <h4>Preparation</h4>
              <ul className="preparation-steps-list">
                {steps}
              </ul>
            </section>
          </section>
        </article>
      </section>
    );
  }
});

module.exports = RecipeDetail;
