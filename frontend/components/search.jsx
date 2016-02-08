var React = require('react'),
    SearchStore = require('../stores/search'),
    SearchBar = require('./search_bar'),
    RecipesIndex = require('./recipe_index');

var Search = React.createClass({
  getInitialState: function () {
    return getSearchFromStore();
  },

  componentDidMount: function () {
    this.resultsListener = SearchStore.addListener(this._resultsChanged);
  },

  getSearchFromStore: function () {
    return {
      results: SearchStore.fullPageResults(),
      query: SearchStore.query()
    };
  },

  _resultsChanged: function () {
    this.setState(this.getSearchFromStore());
  },

  render: function () {
    return (
      <RecipesIndex
        recipes={this.state.results}
        indexDescription={"Results for '" + this.state.query + "'"}
        enforceAuth={this.props.enforceAuth} />
    );
  }
});

module.exports = Search;
