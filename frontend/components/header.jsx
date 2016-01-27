var React = require('react'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util');

var Header = React.createClass({
  componentDidMount: function () {
    var sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function () {
    SessionStore.remove(sessionListener);
  },

  getInitialState: function () {
    return this.getSessionState();
  },

  getSessionState: function () {
    return {
      loggedIn: SessionStore.loggedIn(),
      userId: SessionStore.userId(),
      token: SessionStore.token()
    };
  },

  handleLogOut: function (e) {
    e.preventDefault();
    ApiUtil.logOutUser();
  },

  handleLogIn: function (e) {
    e.preventDefault();
    this.props.newSessionClick();
  },

  _sessionChanged: function () {
    this.setState(this.getSessionState());
  },

  userButton: function () {
    if (this.state.loggedIn) {
      return (
        <button
          className="logout-button"
          onClick={this.handleLogOut}>
          Log Out
        </button>
      );
    } else {
      return (
        <button
          className="login-button"
          onClick={this.handleLogIn}>
          Log In
        </button>
      );
    }
  },

  render: function () {
    return (
      <div>
        <ul className="header-nav">
          <li className="header-nav-sidebar-button"></li>
          <li
            className="header-nav-link">
            <a href="#">Recipe Box</a>
          </li>
          <li
            className="header-nav-link">
            <a href="#">Healthy</a>
          </li>
          <li
            className="header-nav-link">
            <a href="#">Learn To Cook</a>
          </li>
        </ul>
        {this.userButton()}
      </div>
    );
  }
});

module.exports = Header;
