var React = require('react'),
    SessionStore = require('../stores/session'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var NoteForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      user: SessionStore.currentUser(),
      body: '',
      private: false
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  _sessionChanged: function () {
    this.setState({ user: SessionStore.currentUser() });
  },

  handleCancel: function (e) {
    e.preventDefault();
    this.props.cancelNote();
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.submitForm({
      body: this.state.body,
      private: this.state.private,
      parentId: this.props.parent_id
    });
  },

  render: function () {
    if (!this.state.active) {
      return (

      );
    } else {
      return (
        <form
          className="active-note-form">
          <h5>{this.state.user.name}</h5>
          <textarea
            className="note-form-body"
            valueLink={this.linkState('body')/>
          <div className="note-form-private">
            <input
              type="checkbox"
              valueLink={this.linkState('private')}/>
            Make this note private?
          </div>
          <div
            className="note-form-finish">
            <button
              onClick={this.cancelNote}>
              Cancel
            </button>
            <button
              onClick={this.handleSubmit}>
              Add
            </button>
          </div>


        </form>

      )
    }
  }
});

module.exports = NoteForm;
