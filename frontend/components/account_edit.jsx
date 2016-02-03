var React = require('react'),
    SessionStore = require('../stores/session');

var AccountEdit = React.createClass({
  getInitialState: function () {
    return { imageFile: null, imageUrl: "", user: SessionStore.currentUser() };
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

    var formData = new FormData();
    formData.append("user[photo]", this.state.imageFile);

    ApiUtil.uploadUserPhoto(this.state.user.id, userData, this.resetForm);
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },

  render: function () {
    return (
      <section className="edit-account">
        <h4>Upload a new profile photo</h4>
        <form>
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
