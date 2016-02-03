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
      parentId: this.props.parentId
    });
  },

  render: function () {
    var childClass = (this.props.parentId + 1) ? " reply-form" : "";
    return (
      <section
        className={"active-note-section group" + childClass}>
        <div
          className="note-user-image">
        </div>
        <form
          className="active-note-form">
          <h5>{this.state.user.name}</h5>
          <textarea
            className="note-form-body"
            valueLink={this.linkState('body')} />
          <ul
            className="note-form-bottom-options group">
            <li className={"note-form-private" + childClass}>
              <label>
                <input
                  type="checkbox"
                  valueLink={this.linkState('private')}/>
                Make this note private?
              </label>
            </li>
            <li
              className="note-form-finish">
              <button
                onClick={this.handleSubmit}>
                Add
              </button>
              <button
                onClick={this.handleCancel}>
                Cancel
              </button>
            </li>
          </ul>
        </form>
      </section>
    );
  }
});

module.exports = NoteForm;
