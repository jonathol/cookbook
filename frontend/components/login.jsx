var React = require('react'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var signUp = {
  header: "Create An Account",
  headerSub: "Create a free NYThyme's account to get started",
  handleSubmit: this.signUp,
  submitText: "Create Account",
  footerText: "Already have a NYTimes account? <a href='<%= new_user_url %>'>Register now</a>"
};

var Login = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      credentials: { email: '', password: '', },
      authAction: newSession
    };
  },

  logIn: function (e) {
    e.preventDefault();
    ApiUtil.logInUser(this.state.credentials);
  },

  signUp: function (e) {
    e.preventDefault();
    ApiUtil.signUpUser(this.state.credentials);
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
            onClick={this.logIn}>
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

module.exports = Login;
