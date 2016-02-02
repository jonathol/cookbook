var React = require('react'),
    SessionStore = require('../stores/session'),
    Icon = require('react-fontawesome'),
    ApiUtil = require('../util/api_util');

var TopNav = React.createClass({
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    document.removeEventListener('scroll', this.handleScroll);
  },

  getInitialState: function () {
    return this.getSessionState();
  },

  getSessionState: function () {
    return {
      loggedIn: SessionStore.loggedIn(),
      user: SessionStore.currentUser()
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

    var recipeBox;
    if (this.state.loggedIn) {
      recipeBox = (
        <li>
          <a
            href={"#/users/" + this.state.user.id + "/recipe-box"}
            className={"topnav-link" + sticky}>Recipe Box</a>
        </li>
      )
    } else {
      recipeBox = (
        <li>
          <a
            href="#"
            onClick={this.handleLogIn}
            className={"topnav-link" + sticky}>Recipe Box</a>
        </li>
      )
    }

    return (
      <section className={"topnav group" + sticky}>
        <a href="#/">
          <h1
            className={"cookbook-main-header" + sticky}>
            <logo className={"logo" + sticky}></logo>
            <span className={"cookbook-topnav-text" + sticky}>Cookbook</span>
          </h1>
        </a>
        <ul className={"topnav-left group" + sticky}>
          <li>
            <div className={"topnav-button sidebar-button" + sticky}>
              <Icon name='angle-double-right' className={"button-icon" + sticky} />
            </div>
          </li>
          {recipeBox}
          <li>
            <a className={"topnav-link" + sticky}>Healthy</a>
          </li>
          <li>
            <a className={"topnav-link" + sticky}>Learn To Cook</a>
          </li>
        </ul>
        <ul className={"topnav-right group" + sticky}>
          <li>
            <div className={"topnav-button search" + sticky}>
              <Icon name='search' className={"search-icon button-icon" + sticky} />
              <span className={"search-button-text" + sticky}>Search 40+ recipes</span>
            </div>
          </li>
          <li>
            <div className={"topnav-button user-control" + sticky}>
              {userButton}
            </div>
          </li>
        </ul>
      </section>
    );
  }
});

module.exports = TopNav;
