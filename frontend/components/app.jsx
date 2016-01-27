var React = require('react'),
    Header = require('./header');

var App = React.createClass({
  render: function () {
    return (
      <div className="cookbook">
        <header><h1><logo>t</logo> Cookbook</h1></header>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
