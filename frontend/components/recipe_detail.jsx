var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    ApiUtil = require('../util/api_util'),
    Icon = require('react-fontawesome');

var RecipeDetail = React.createClass({
  componentDidMount: function () {
    this.recipesListener = RecipeStore.addListener(this._recipesChanged);
    ApiUtil.fetchFeaturedRecipe(this.props.params.recipeId);
  },

  componentWillUnmount: function () {
    this.recipesListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchFeaturedRecipe(newProps.params.recipeId);
  },

  getRecipeFromStore: function () {
    return { recipe: RecipeStore.featured() };
  },

  _recipesChanged: function () {
    this.setState(this.getRecipeFromStore());
  },

  render: function () {
    if (!this.state) {
      return (
        <section className="recipe-show missing-recipe"></section>
      );
    }

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
            <section className="recipe-description">
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
