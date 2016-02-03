var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item');

module.exports = React.createClass({
  componentDidMount: function () {
    if (!this.props.children) {
      var userPath = this.props.location.pathname;
      this.props.history.pushState(null, userPath + "/recipe-box");
    }
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, { enforceAuth: this.props.enforceAuth });
    }.bind(this));
  },

  render: function () {
    return (
      <main className="user-information">
        {this.renderChildren()}
      </main>
    );
  }
});
