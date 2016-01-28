var React = require('react'),
    Header = require('./header'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session'),
    Auth = require('./auth');

var App = React.createClass({
  cancelAuth: function () {
    this.setState({ authAction: false });
  },

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
    var state = this.getSessionState();
    state.authAction = false;
    return state;
  },

  getSessionState: function () {
    return { userId: SessionStore.userId() };
  },

  _sessionChanged: function () {
    this.setState(this.getSessionState());
    this.setState({ authAction: false });
  },

  newSession: function () {
    this.setState({ authAction: true });
    // this.props.history.pushState(null, '/login');
  },

  render: function () {
    var auth = this.state.authAction ? <Auth cancel={this.cancelAuth} /> : ""
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
