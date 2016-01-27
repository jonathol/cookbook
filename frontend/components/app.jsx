var React = require('react'),
    Header = require('./header'),
    AuthActions = require('../actions/auth_actions');

var App = React.createClass({
  componentDidMount: function () {
    var token = localStorage.getItem('session_token');
    if (token) {
      AuthActions.logInUser(token);
    }
  },

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
