var React = require('react'),
    SearchStore = require('../stores/search'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/api_util');

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  componentDidMount: function () {
    this.searchListener = SearchStore.addListener(this._resultsChanged);
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },

  getInitialState: function () {
    return { query: "", instantResults: [] };
  },

  fullPageSearch: function (e) {
    e.preventDefault();
  },

  instantSearch: function (e) {
    ApiUtil.instantSearch(this.state.query);
  },

  _resultsChanged: function () {
    this.setState({ instantResults: SearchStore.instantResults() });
  },

  render: function () {
    var tags = [];
    var recipes = [];
    this.state.instantResults.forEach(function (result, idx) {
      if (result._type === "Tag") {
        tags.push(
          <li
            key={idx}
            className="instant-result tag-instant-result">
            <a href={"#/tags/" + result.id}>{result.name}</a>
          </li>
        );
      } else {
        recipes.push(
          <li
            key={idx}
            className="instant-result recipe-instant-result">
            <a href={"#/recipes/" + result.id}>
              <div
                className="recipe-result-thumb">
                <img src={result.thumb_url} />
              </div>
              {result.title}
            </a>
          </li>
        );
      }
    });

    var tagResults;
    if (tags[0]) {
      tagResults = (
        <ul className="tag-instant-result-list">
          {tags.slice(0, 3)}
        </ul>
      );
    }
    var recipeResults;
    if (recipes[0]) {
      recipeResults = (
        <ul className="recipe-instant-result-list">
          {recipes.slice(0, 3)}
        </ul>
      );
    }

    return (
      <section
        className="search-bar">
        <form
          className="search-form"
          onSubmit={this.fullPageSearch}>
          <input
            type="text"
            placeholder="What do you feel like cooking?"
            valueLink={this.linkState('query')}
            onKeyUp={this.instantSearch} />
          <button>Search</button>
          <section
            className="instant-search-results">
            {tagResults}
            {recipeResults}
          </section>
        </form>
      </section>
    );
  }
});

module.exports = SearchBar;
