var React = require('react'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var AccountEdit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return $.extend({ imageFile: null }, this.getSessionFromStore());
  },

  componentDidMount: function () {
    this.redirectIfNoUser();
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: reader.result });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageFile: null, imageUrl: "" });
    }
  },

  changesMade: function () {
    var session = this.getSessionFromStore();
    return this.state.imageUrl !== session.imageUrl ||
      this.state.userId !== session.userId ||
      this.state.userName !== session.userName;
  },

  getSessionFromStore: function () {
    var user = SessionStore.currentUser();
    return ({
      imageUrl: user.photo_url,
      userId: user.id,
      userName: user.name
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var userData = new FormData();
    userData.append("user[photo]", this.state.imageFile);
    userData.append("user[name]", this.state.userName);

    ApiUtil.updateUserData(this.state.userId, userData, this.resetForm);
  },

  resetForm: function() {
    this.setState($.extend({ imageFile: null }, this.getSessionFromStore()));
  },

  redirectIfNoUser: function () {
    if (!SessionStore.loggedIn()) {
      this.props.history.pushState(null, '/');
    }
  },

  _sessionChanged: function () {
    this.setState(this.getSessionFromStore());
    this.redirectIfNoUser();
  },

  render: function () {
    var changed = this.changesMade() ? " changes-made" : "";
    return (
      <section className="edit-account group">
        <form
          className="edit-account-form"
          onSubmit={this.handleSubmit}>
          <h4>Your Profile</h4>
          <ul className="fields group">
            <li className="group">
              <label htmlFor="user_name">
                Name
              </label>
              <input
                id="user_name"
                type="text"
                valueLink={this.linkState('userName')} />
            </li>
            <li className="group photo">
              <label htmlFor="user_photo">
                Photo
              </label>
              <div className="file-upload">
                <span>Upload</span>
                <input
                  className="user-photo-input"
                  id="user_photo"
                  type="file"
                  onChange={this.changeFile} />
              </div>
            </li>
            <img className="preview-image" src={this.state.imageUrl} />
          </ul>
          <button className={changed}>Save</button>
        </form>
      </section>
    );
  }
});

module.exports = AccountEdit;
