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
      <div className="header">
        <ul className="header-nav-left">
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
        <h1
          className="cookbook-header-text">
          NYThyme's Cookbook
        </h1>
        <ul className="header-nav-right">
          <li
            className="header-nav-search-button">
            Search
          </li>
          <li
            className="header-nav-user-button">
            {this.userButton()}
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Header;
