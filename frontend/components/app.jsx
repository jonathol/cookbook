var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="cookbook">
        <header><h1><logo>t</logo> Cookbook</h1></header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
