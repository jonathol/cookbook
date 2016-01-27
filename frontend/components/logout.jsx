var React = require('react'),
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session');

var Logout = React.createClass({
  getInitialState: function () {
    return { user: SessionStore.user() };
  },

  handleLogOut: function (e) {
    e.preventDefault();

    ApiUtil.logOutUser
  },

  render: function () {
    return (
      <button
        className="logout-button"
        onClick={this.handleLogOut}>
        Log Out
      </button>
    );
  }
});
