var React = require('react'),
    SessionStore = require('../stores/session'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var NoteForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { active: false, user: SessionStore.currentUser() };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  _handleToggleForm: function (e) {
    if (!this.props.enforceAuth()) {
      return;
    } else if (!this.state.active) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  },

  _sessionChanged: function () {
    this.setState({ user: SessionStore.currentUser() });
  },

  render: function () {
    if (!this.state.active) {
      return (
        <textarea
          className="inactive-note-form"
          onClick={this._handleToggleForm} />
      );
    } else {
      return (
        <form
          className="active-note-form">
          <h5>{this.state.user.name}</h5>
          <textarea className="note-form-body" />

        </form>

      )
    }
  }
});

module.exports = NoteForm;
