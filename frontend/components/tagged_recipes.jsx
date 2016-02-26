var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeStore = require('../stores/recipe'),
    TagStore = require('../stores/tag'),
    RecipesIndex = require('./recipes_index');

var TaggedRecipes = React.createClass({
  getInitialState: function () {
    return { tag: TagStore.indexed(), recipeList: RecipeStore.all() };
  },

  componentDidMount: function () {
    this.tagListener = TagStore.addListener(this._tagsChanged);
    this.recipesListener = RecipeStore.addListener(this._recipesChanged);
    ApiUtil.fetchTaggedRecipes(this.props.params.tagId);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchTaggedRecipes(newProps.params.tagId);
  },

  componentWillUnmount: function () {
    this.tagListener.remove();
    this.recipesListener.remove();
  },

  _tagsChanged: function () {
    this.setState({ tag: TagStore.indexed() });
  },

  _recipesChanged: function () {
    this.setState({ recipeList: RecipeStore.all() });
  },

  render: function () {
    return (
      <section
        className="tagged-recipes">
        <RecipesIndex
          recipes={this.state.recipeList}
          indexDescription={"Recipes tagged '" + this.state.tag.name + "'"}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = TaggedRecipes;
