var React = require('react'),
    SessionStore = require('../stores/session'),
    Logout = require('./logout');

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

  _sessionChanged: function () {
    this.setState(this.getSessionState());
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
        <Logout />
      </div>
    );
  }
});

module.exports = Header;
