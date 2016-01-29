var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  render: function () {
    return (
      <main className="user-information">
        {this.props.children}
      </main>
    );
  }
});
