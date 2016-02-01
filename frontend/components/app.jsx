var React = require('react'),
    Header = require('./header'),
    ApiUtil = require('../util/api_util'),
    AuthActions = require('../actions/auth_actions'),
    SessionStore = require('../stores/session'),
    Auth = require('./auth');

var App = React.createClass({
  cancelAuth: function () {
    this.setState({ authAction: false });
  },

  componentDidMount: function () {
    ApiUtil.fetchCurrentUser();
    var sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillReceiveProps: function (newProps) {
    var authAction = (newProps.location.pathname === "/login");
    this.setState({ authAction: authAction });
  },

  componentWillUnmount: function () {
    sessionListener.remove();
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
    state.authAction = (this.props.location.pathname === "/login");
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
        <Header newSessionClick={this.newSession} />
        {auth}
        {this.renderChildren()}
      </div>
    );
  }
});

module.exports = App;
