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
      ApiUtil.fetchAuthoredRecipes(this.props.user.id);
    }
  },

  switchToSaved: function () {
    if (this.state.tab !== "saved") {
      this.setState({ tab: "saved" });
      ApiUtil.fetchSavedRecipes(this.props.user.id);
    }
  },

  render: function () {
    if (!this.props.user.name) {
      return (
        <section className="recipe-box"></section>
      );
    }

    var name = /(\w+)(\s|@)/.exec(this.props.user.name);
    var active = (this.state.tab === "saved") ? " active" : "";
    var savedButton = (
      <div
        onClick={this.switchToSaved}
        className={"recipe-box-tab-button" + active}>
        {name[1] + "'s Saved Recipes"}
      </div>
    );

    var authoredButton;
    if (this.props.user && this.props.user.author) {
      active = (this.state.tab === "authored") ? " active" : "";
      authoredButton = (
        <div
          onClick={this.switchToAuthored}
          className={"recipe-box-tab-button" + active}>
          Recipes By {name[1]}
        </div>
      );
    }

    return (
      <section
        className="recipe-box">
        <section
          className="recipe-index-tabs">
          {savedButton}
          {authoredButton}
        </section>
        <RecipesIndex
          recipes={this.state.recipeList}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = RecipeBox;
