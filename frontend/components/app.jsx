var React = require('react'),
    Header = require('./header'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session'),
    Auth = require('./auth');

var App = React.createClass({
  componentDidMount: function () {
    var token = localStorage.getItem('session_token');
    if (token && token !== "undefined") {
      AuthActions.logInUser(token);
    }
    var sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function () {
    sessionListener.remove();
  },

  getInitialState: function () {
    return { authState: false };
  },

  _sessionChanged: function () {
    this.props.history.pushState(null, "/");
  },

  newSession: function () {
    this.setState({ authState: true });
    // this.props.history.pushState(null, '/login');
  },

  render: function () {
    var auth = this.state.authState ? <Auth /> : ""
    return (
      <div className="cookbook">
        <header><h1><logo>t</logo> Cookbook</h1></header>
        <Header newSessionClick={this.newSession} />
        {auth}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
