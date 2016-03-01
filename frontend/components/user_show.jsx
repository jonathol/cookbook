var React = require('react'),
    ApiUtil = require('../util/api_util'),
    RecipeIndexItem = require('./recipe_index_item'),
    UserStore = require('../stores/user');

module.exports = React.createClass({
  componentDidMount: function () {
    if (!this.props.children) {
      var userPath = this.props.location.pathname;
      this.props.history.pushState(null, userPath + "/recipe-box");
    }
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUserInfo(newProps.params.userId);
  },

  getInitialState: function () {
    return { user: UserStore.user() };
  },

  _userChanged: function () {
    this.setState({ user: UserStore.user() });
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        enforceAuth: this.props.enforceAuth,
        user: this.state.user
      });
    }.bind(this));
  },

  render: function () {
    if (!this.state.user) {
      return (
        <main className="recipe-box"></main>
      );
    }

    return (
      <main className="recipe-box">
        <section className="user-information group">
            <img
              className="user-recipe-box-photo"
              src={this.state.user.photo_url} />
            <h3 className="recipes-index-title">
              {this.state.user.name + "'s Recipe Box"}
            </h3>
        </section>
        {this.renderChildren()}
      </main>
    );
  }
});
