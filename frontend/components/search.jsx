var React = require('react'),
    SearchStore = require('../stores/search'),
    SearchBar = require('./search_bar'),
    RecipesIndex = require('./recipes_index');

var Search = React.createClass({
  getInitialState: function () {
    return this.getSearchFromStore();
  },

  componentDidMount: function () {
    this.resultsListener = SearchStore.addListener(this._resultsChanged);
  },

  componentWillUnmount: function () {
    this.resultsListener.remove();
  },

  endSearch: function () {
    return;
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
      <section className="search">
        <SearchBar
          history={this.props.history}
          endSearch={this.endSearch}
          fullPage={true} />
        <RecipesIndex
          recipes={this.state.results}
          indexDescription={"Results for '" + this.state.query + "'"}
          enforceAuth={this.props.enforceAuth} />
      </section>
    );
  }
});

module.exports = Search;
