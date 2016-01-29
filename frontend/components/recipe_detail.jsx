var React = require('react'),
    RecipeStore = require('../stores/recipe'),
    ApiUtil = require('../util/api_util'),
    Icon = require('react-fontawesome');

var RecipeDetail = React.createClass({
  componentDidMount: function () {
    var recipesListener = RecipeStore.addListener(this._recipesChanged);
    ApiUtil.fetchFeaturedRecipe(this.props.params.recipeId);
  },

  componentWillUnmount: function () {
    recipesListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchFeaturedRecipe(newProps.params.recipeId);
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
    var ingredients = this.state.recipe.ingredients.map(function (ingredient, idx) {
      return (
        <li key={idx} className="ingredient">
          <div className="ingredient-quantity">
            {ingredient.quantity}
          </div>
          <div className="ingredient-quantity">
            {ingredient.name}
          </div>
        </li>
      );
    });

    var steps = this.state.recipe.steps.map(function (step, idx) {
      return (
        <li key={idx} className="preparation-step">
          <h5 className="step-number">
            Step {step.step_number}
          </h5>
          <p className="step-body">
            {step.description}
          </p>
        </li>
      );
    });

    return (
      <section
        className="recipe-detail">
        <article className="recipe-article">
          <h2
            className="recipe-detail-title">
            {this.state.recipe.title}
          </h2>
          <div
            className="basic-recipe-info">
            <h3
              className="recipe-detail-author">
              {this.state.recipe.author}
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
      </section>
    );
  }
});

module.exports = RecipeDetail;