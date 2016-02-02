var React = require('react'),
    TopNav = require('./topnav'),
    ApiUtil = require('../util/api_util'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session'),
    Auth = require('./auth');

var App = React.createClass({
  cancelAuth: function () {
    this.setState({ authAction: false });
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
    ApiUtil.fetchCurrentUser();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ authAction: false });
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  enforceAuth: function () {
    if (SessionStore.loggedIn()) {
      return true;
    } else {
      this.newSession();
    }
  },

  getInitialState: function () {
    var state = this.getSessionState();
    return state;
  },

  getSessionState: function () {
    return { user: SessionStore.currentUser() };
  },

  _sessionChanged: function () {
    this.setState(this.getSessionState());
    this.setState({ authAction: false });
  },

  newSession: function () {
    this.setState({ authAction: true });
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, { enforceAuth: this.enforceAuth });
    }.bind(this));
  },

  render: function () {
    var auth = this.state.authAction ? <Auth cancel={this.cancelAuth} /> : "";
    return (
      <div className="cookbook">
        <TopNav newSessionClick={this.newSession} />
        {auth}
        {this.renderChildren()}
      </div>
    );
  }
});

module.exports = App;
