var React = require('react');

var Login = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { email: '', password: '' };
  },

  attemptLogin: function (e) {

  },

  render: function () {
    return (
      <div className="user-form-box">
        <div className="user-form-header">
          <h2>Log In</h2>
          <p>Use your NYThyme's account</p>
        </div>
        <form className="user-form">
          <input
            type="text"
            placeholder="Email Address"
            valueLink={this.linkState('email')} />
          <input
            type="password"
            placeholder="Password"
            valueLink={this.linkState('password')} />
          <button
            onClick={this.attemptLogin}>
            Log In
          </button>
        </form>
        <div className="user-form-footer">
          <p>
            Don't have a NYThyme's account? <a href="<%= new_user_url %>">Register now</a>
          </p>
        </div>
      </div>
    );
  }

});
