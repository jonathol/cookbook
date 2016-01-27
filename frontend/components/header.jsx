var React = require('react'),
    SessionStore = require('../stores/session');

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
        <ul>
          <li>Logged In?: {this.state.loggedIn}</li>
          <li>User: {this.state.userId}</li>
          <li>Token: {this.state.token}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Header;
