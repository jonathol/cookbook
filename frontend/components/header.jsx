var React = require('react'),
    SessionStore = require('../stores/session'),
    Icon = require('react-fontawesome'),
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
          className="logout-button button-icon"
          onClick={this.handleLogOut}>
          Log Out
        </button>
      );
    } else {
      return (
        <button
          className="login-button button-icon"
          onClick={this.handleLogIn}>
          Log In
        </button>
      );
    }
  },

  render: function () {
    return (
      <section className="header group">
        <ul className="header-nav-left group">
          <li>
            <div className="header-nav-button sidebar-button">
              <Icon name='angle-double-right' className="button-icon" />
            </div>
          </li>
          <li>
            <p className="header-nav-link">Recipe Box</p>
          </li>
          <li>
            <p className="header-nav-link">Healthy</p>
          </li>
          <li>
            <p className="header-nav-link">Learn To Cook</p>
          </li>
        </ul>
        <h1
          className="cookbook-header-text">
          NYThyme's Cookbook
        </h1>
        <ul className="header-nav-right group">
          <li>
            <div className="header-nav-button search">
              <Icon name='search' className="header-search-icon button-icon" />
              Search 40+ recipes
            </div>
          </li>
          <li>
            <div className="header-nav-button user-control">
              {this.userButton()}
            </div>
          </li>
        </ul>
      </section>
    );
  }
});

module.exports = Header;
