var React = require('react'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var AccountEdit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    var user = SessionStore.currentUser();
    return {
      imageFile: null,
      imageUrl: "",
      userId: user.id,
      userName: user.name
    };
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

  handleSubmit: function(e) {
    e.preventDefault();

    var userData = new FormData();
    userData.append("user[photo]", this.state.imageFile);
    userData.append("user[name]", this.state.userName);

    ApiUtil.updateUserData(this.state.userId, userData, this.resetForm);
  },

  resetForm: function() {
    this.setState({ imageFile: null, imageUrl: "", userName: null });
  },

  render: function () {
    return (
      <section className="edit-account">
        <h4>Your Profile</h4>
        <form
          onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              valueLink={this.linkState('userName')} />
          </label>
          <label>
            <input type="file" onChange={this.changeFile} />
          </label>
          <img className="preview-image" src={this.state.imageUrl}/>
          <button>Submit</button>
        </form>
      </section>
    );
  }
});

module.exports = AccountEdit;
