var React = require('react'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var newUser = {
  header: "Create An Account",
  headerSub: "Create a free NYThyme's account to get started",
  submitText: "Create Account"
};

var newSession = {
  header: "Log In",
  headerSub: "Use your NYThyme's account",
  submitText: "Log In"
};

var Auth = React.createClass({
  mixins: [LinkedStateMixin],

  getAuthActionFromParams: function (props) {
    return props.params.route.path === "login" ? newSession : newUser;
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ authAction: this.getAuthActionFromParams(newProps) });
  },

  credentials: function () {
    return {
      email: this.state.email,
      password: this.state.password,
    };
  },

  getInitialState: function () {
    return {
      email: '',
      password: '',
      authAction: this.getAuthActionFromParams(this.props)
    };
  },

  handleDemo: function (e) {
    e.preventDefault();
    this.setState({ email: "kylew90@comcast.net", password: "ilovefood" });
    this.logIn();
  },

  handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.authAction === newSession) {
      this.logIn();
    } else {
      this.signUp();
    }
  },

  logIn: function () {
    ApiUtil.logInUser(this.credentials());
  },

  signUp: function () {
    ApiUtil.signUpUser(this.credentials());
  },

  toggleAuthAction: function () {
    var newAuth = (this.state.authAction === newSession) ? newUser : newSession;
    this.setState({ email: '', password: '', authAction: newAuth });
  },

  render: function () {
    var auth;
    if (this.state.authAction === newSession) {
      auth = newSession;
      auth.footerText = (
        <p>
          Don't have a NYThyme's account? <span className="footer-link" onClick={this.toggleAuthAction}>Register now</span>
        </p>
      );
    } else {
      auth = newUser;
      auth.footerText = (
        <p>
          Already have a NYTimes account? <span className="footer-link" onClick={this.toggleAuthAction}>Log In</span>
        </p>
      );
    }

    return (
      <div className="modal">
        <section className="user-form-modal">
          <div className="close-modal" onClick={this.props.cancel}>&times;</div>
          <div className="user-form-header">
            <h2>{auth.header}</h2>
            <p>{auth.headerSub}</p>
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
            <div>

            </div>
            <button
              onClick={this.handleSubmit}>
              {auth.submitText}
            </button>
            <button
              onClick={this.handleDemo}>
              Demo Log In
            </button>
          </form>
          <div className="user-form-footer">
            {auth.footerText}
          </div>
        </section>
        <div className="modal-screen" onClick={this.props.cancel}></div>
      </div>
    );
  }
});

module.exports = Auth;
