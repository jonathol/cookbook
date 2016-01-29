var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    ApiUtil = require('../util/api_util');

var RecipeDetail = React.createClass({
  componentDidMount: function () {
    var recipesListener = RecipeStore.addListener(this._recipesChanged);
  },

  componentWillUnmount: function () {
    recipesListener.remove();
  },

  getInitialState: function () {
    return this.getRecipeFromStore();
  },

  getRecipeFromStore: function () {
    return { recipe: RecipeStore.featured() };
  },

  _recipesChanged: function () {
    this.setState(this.getRecipeFromStore());
  },

  render: function () {
    var ingredients = this.state.recipe.ingredients.map(function (ingredient) {
      return (
        <li className="ingredient">
          <div className="ingredient-quantity">{ingredient.quantity}</div>
          <div className="ingredient-quantity">{ingredient.name}</div>
        </li>
      );
    });

    var steps = this.state.recipe.steps.map(function (step) {
      return (
        <li className="preparation-step">
          <h5 className="step-number">Step {step.step_number}</h5>
          <p className="step-body">{step.description}</p>
        </li>
      );
    });

    return (
      <article
        className="recipe-detail">
        <h2
          className="recipe-detail-title">
          {this.state.recipe.title}
        </h2>
        <h3
          className="recipe-detail-author">
          {this.state.recipe.author}
        </h3>
        <p
          className="recipe-detail-more-info">
          <span
            className="detail-cook-time">
            {this.state.recipe.cook_time}
          </span>
          <span
            className="detail-servings">
            {this.state.recipe.servings}
          </span>
        </p>
        <div className="recipe-description">
          <p
            className="recipe-description-text">
            {this.state.recipe.description}
          </p>
        </div>
        <div className="recipe-prep-ingredients">
          <ul className="recipe-ingredients">
            {ingredients}
          </ul>
          <ul className="recipe-steps">
            {steps}
          </ul>
        </div>
      </article>
    );
  }
});

module.exports = RecipeDetail;
