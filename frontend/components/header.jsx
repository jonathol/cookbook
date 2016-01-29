var React = require('react'),
    SessionStore = require('../stores/session'),
    Icon = require('react-fontawesome'),
    ApiUtil = require('../util/api_util');

var Header = React.createClass({
  componentDidMount: function () {
    var sessionListener = SessionStore.addListener(this._sessionChanged);
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function () {
    SessionStore.remove(sessionListener);
    document.removeEventListener('scroll', this.handleScroll);
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

  handleScroll: function (e) {
    if ($(window).scrollTop() > 1) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  },

  _sessionChanged: function () {
    this.setState(this.getSessionState());
  },

  render: function () {
    // debugger

    var sticky = this.state.scrolled ? " sticky" : "";
    var userButton;
    if (this.state.loggedIn) {
      userButton = (
        <Icon
          name="cog"
          className={"cog-icon button-icon" + sticky}
          onClick={this.handleLogOut} />
      );
    } else {
      userButton = (
        <div
          className={"login-button button-icon" + sticky}
          onClick={this.handleLogIn}>
          Log In
        </div>
      );
    }

    return (
      <section className={"header group" + sticky}>
        <h1
          className={"cookbook-main-header" + sticky}>
          <logo className={"logo" + sticky}></logo>
          <span className={"cookbook-header-text" + sticky}>Cookbook</span>
        </h1>
        <ul className={"header-nav-left group" + sticky}>
          <li>
            <div className={"header-nav-button sidebar-button" + sticky}>
              <Icon name='angle-double-right' className={"button-icon" + sticky} />
            </div>
          </li>
          <li>
            <p className={"header-nav-link" + sticky}>Recipe Box</p>
          </li>
          <li>
            <p className={"header-nav-link" + sticky}>Healthy</p>
          </li>
          <li>
            <p className={"header-nav-link" + sticky}>Learn To Cook</p>
          </li>
        </ul>
        <ul className={"header-nav-right group" + sticky}>
          <li>
            <div className={"header-nav-button search" + sticky}>
              <Icon name='search' className={"search-icon button-icon" + sticky} />
              <span className={"search-button-text" + sticky}>Search 40+ recipes</span>
            </div>
          </li>
          <li>
            <div className={"header-nav-button user-control" + sticky}>
              {userButton}
            </div>
          </li>
        </ul>
      </section>
    );
  }
});

module.exports = Header;
