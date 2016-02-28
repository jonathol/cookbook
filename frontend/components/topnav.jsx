var React = require('react'),
    SessionStore = require('../stores/session'),
    TagStore = require('../stores/tag'),
    Icon = require('react-fontawesome'),
    SearchBar = require('./search_bar'),
    ApiUtil = require('../util/api_util');

var TopNav = React.createClass({
  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
    this.tagsListener = TagStore.addListener(this._tagsChanged);

    ApiUtil.fetchFeaturedTags();
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillReceiveProps: function () {
    this.setState({
      searchBarActive: false,
      dropdownActive: false
    });
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.tagsListener.remove();
    document.removeEventListener('scroll', this.handleScroll);
  },

  getInitialState: function () {
    var state = this.getSessionState();
    state.dropdownActive = false;
    state.searchBarActive = false;
    state.featuredTags = TagStore.featured();
    return state;
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

  toggleSearchBar: function (e) {
    if (this.props.location.pathname === "/search") {
      return;
    }
    this.setState({ searchBarActive: !this.state.searchBarActive });
  },

  toggleUserDropDown: function (e) {
    this.setState({ dropdownActive: !this.state.dropdownActive });
  },

  _sessionChanged: function () {
    this.setState(this.getSessionState());
  },

  _tagsChanged: function () {
    this.setState({ featuredTags: TagStore.featured() });
  },

  render: function () {
    var sticky = this.state.scrolled ? " sticky" : "";
    var userButton;

    var active = this.state.dropdownActive ? " active" : "";
    if (this.state.loggedIn) {
      userButton = (
        <div className="topnav-user-button">
          <Icon
            name="cog"
            className={"cog-icon button-icon" + sticky}
            onClick={this.toggleUserDropDown} />
          <div className={"dropdown-triangle" + active}></div>
          <ul
            className={"topnav-user-dropdown" + active}>
            <li>
              <a
                onClick={this.toggleUserDropDown}
                href="#/account/edit">
                Edit Profile
              </a>
            </li>
            <li>
              <a
                onClick={this.toggleUserDropDown}
                href={"#/users/" + this.state.user.id + "/recipe-box"}>
                Your Recipe Box
              </a>
            </li>
            <li className="topnav-user-email">
              {this.state.user.email}
            </li>
            <li onClick={this.handleLogOut}><a href="#">Log Out</a></li>
            <div
              className="screen dropdown-screen"
              onClick={this.toggleUserDropDown}>
            </div>
          </ul>
        </div>
      );
    } else {
      userButton = (
        <div
          className={"login-button button-icon" + sticky}
          onClick={this.handleLogIn}>
          <Icon
            name="cog"
            className={"login-icon" + sticky}
            onClick={this.toggleUserDropDown} />
          <span className="login-text">Log In</span>
        </div>
      );
    }

    var recipeBox;
    var sideBar;
    if (this.state.loggedIn) {
      recipeBox = (
        <li className="topnav-recipe-box">
          <a
            href={"#/users/" + this.state.user.id + "/recipe-box"}
            className={"topnav-link" + sticky}>Recipe Box</a>
        </li>
      );
      sideBar = (
        <li>
          <a
            href={"#/users/" + this.state.user.id + "/recipe-box"}>
            <div
              className={"topnav-button sidebar-button" + sticky}>
              <Icon name='angle-double-right' className={"button-icon" + sticky} />
            </div>
          </a>
        </li>
      );
    } else {
      recipeBox = (
        <li className="topnav-recipe-box">
          <a
            href="#"
            onClick={this.handleLogIn}
            className={"topnav-link" + sticky}>Recipe Box</a>
        </li>
      );
      sideBar = (
        <li>
          <a
            href="#"
            onClick={this.handleLogIn}>
            <div
              className={"topnav-button sidebar-button" + sticky}>
              <Icon name='angle-double-right' className={"button-icon" + sticky} />
            </div>
          </a>
        </li>
      );
    }

    var searchBar;
    if (this.state.searchBarActive) {
      searchBar = (
        <SearchBar
          location={this.props.location}
          history={this.props.history}
          endSearch={this.toggleSearchBar} />
      )
    }

    return (
      <section className={"topnav group" + sticky}>
        <section className={"main-nav-section group" + sticky}>
          <a href="#/">
            <h1
              className={"cookbook-main-header" + sticky}>
              <logo className={"logo" + sticky}></logo>
              <span className={"cookbook-topnav-text" + sticky}>Cookbook</span>
            </h1>
          </a>
          <ul className={"topnav-left group" + sticky}>
            {sideBar}
            {recipeBox}
            <li className="topnav-tag">
              <a
                href={"#/tags/" + this.state.featuredTags[0].id}
                className={"topnav-link" + sticky}>
                {this.state.featuredTags[0].name}
              </a>
            </li>
            <li className="topnav-tag">
              <a
                href={"#/tags/" + this.state.featuredTags[1].id}
                className={"topnav-link" + sticky}>
                {this.state.featuredTags[1].name}
              </a>
            </li>
          </ul>
          <ul className={"topnav-right group" + sticky}>
            <li>
              <div
                className={"topnav-button search" + sticky}
                onClick={this.toggleSearchBar}>
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
        {searchBar}
      </section>
    );
  }
});

module.exports = TopNav;
