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

  clearSearch: function () {
    this.setState({ query: "", instantResults: [] });
    ApiUtil.instantSearch("");
  },

  fullPageSearch: function (e) {
    e.preventDefault();
    ApiUtil.fullSearch(this.state.query, 1);
    this.props.history.pushState(null, '/search');
    this.props.endSearch();
    this.clearSearch();
  },

  instantSearch: function (e) {
    ApiUtil.instantSearch(this.state.query);
  },

  _resultsChanged: function () {
    this.setState({ instantResults: SearchStore.instantResults() });
  },

  render: function () {
    var positioning = this.props.fullPage ? " relative-pos" : " fixed-pos";
    var searchScreen;
    if (!this.props.fullPage) {
      searchScreen = (
        <div
          className="screen search-screen"
          onClick={this.props.endSearch}>
        </div>
      );
    }


    var tags = [];
    var recipes = [];
    this.state.instantResults.forEach(function (result, idx) {
      if (result._type === "Tag") {
        tags.push(
          <li
            key={idx}
            onClick={this.props.endSearch}
            className="tag-instant-result">
            <a href={"#/tags/" + result.id}>{result.name}</a>
          </li>
        );
      } else {
        recipes.push(
          <li
            key={idx}
            onClick={this.props.endSearch}
            className="recipe-instant-result">
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
    }.bind(this));

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
          <span className="suggested-recipes">Suggestions</span>
          {recipes.slice(0, 3)}
        </ul>
      );
    }
    var clearOff = !this.state.query ? " off" : "";
    return (
      <section
        className={"search-bar" + positioning}>
        <form
          className="search-form"
          onSubmit={this.fullPageSearch}>
          <div
            onClick={this.clearSearch}
            className={"clear-search" + clearOff}>&times;</div>
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
        {searchScreen}
      </section>
    );
  }
});

module.exports = SearchBar;
