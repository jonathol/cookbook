var React = require('react'),
    SearchStore = require('../stores/search'),
    SearchBar = require('./search_bar');

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
    
  }
});

module.exports = Search;
