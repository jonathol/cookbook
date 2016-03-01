var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeStore = require('../stores/recipe'),
    RecipesIndex = require('./recipes_index');

var RecipeBox = React.createClass({
  getInitialState: function () {
    return {
      recipeList: RecipeStore.all(),
      tab: "saved"
    };
  },

  componentDidMount: function () {
    this.recipeListener = RecipeStore.addListener(this._recipesChanged);
    ApiUtil.fetchSavedRecipes(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.recipeListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSavedRecipes(newProps.params.userId);
  },

  _recipesChanged: function () {
    this.setState({ recipeList: RecipeStore.all() });
  },

  switchToAuthored: function () {
    if (this.state.tab !== "authored") {
      this.setState({ tab: "authored" });
      ApiUtil.fetchAuthoredRecipes();
    }
  },

  switchToSaved: function () {
    if (this.state.tab !== "saved") {
      this.setState({ tab: "saved" });
      ApiUtil.fetchSavedRecipes();
    }
  },

  render: function () {
    var active = (this.state.tab !== "saved") ? " active" : "";
    var savedButton = (
      <div
        onClick={this.switchToSaved}
        class={active}>
        Recipes By {this.props.user.name.split(" ")[0]}
      </div>
    );

    var authoredButton;
    if (this.props.user && this.props.user.author) {
      active = (this.state.tab !== "authored") ? " active" : "";
      authoredButton = (
        <div
          onClick={this.switchToAuthored}
          class={active}>
          Recipes By {this.props.user.name.split(" ")[0]}
        </div>
      );
    }

    return (
      <section
        className="recipe-box">
        <section
          className="recipe-index-tabs">
        </section>
        <RecipesIndex
          recipes={this.state.recipeList}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = RecipeBox;
