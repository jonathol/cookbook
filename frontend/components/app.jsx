var React = require('react'),
    Header = require('./header'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session');

var App = React.createClass({
  componentDidMount: function () {
    var token = localStorage.getItem('session_token');
    if (token) {
      AuthActions.logInUser(token);
    }
    var sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function () {
    sessionListener.remove();
  },

  _sessionChanged: function () {
    this.props.history.pushState(null, "/");
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
