var React = require('react'),
    Icon = require('react-fontawesome'),
    NoteForm = require('./note_form'),
    NotesIndex = require('./notes_index'),
    ApiUtil = require('../util/api_util');

var NoteIndexItem = React.createClass({
  getInitialState: function () {
    return { formActive: false };
  },

  cancelReply: function () {
    this.setState({ formActive: false });
  },

  submitNote: function (note) {
    this.setState({ formActive: false });
    ApiUtil.createNote(this.props.note.recipe_id, note);
  },

  toggleReply: function () {
    if (!this.props.enforceAuth()) {
      return;
    } else {
      this.setState({ formActive: true });
    }
  },

  render: function () {
    var childNotes;
    if (this.props.note.child_notes.length > 0) {

    }

    var parentNote = (

    );

    var replyButton;
    if (!this.props.note.parent_id) {
      replyButton = (
        <li
          onClick={this.toggleReply}>
          <Icon name="reply" />
          Reply
        </li>
      );
    }

    var replyForm;
    if (this.state.formActive) {
      replyForm = (
        <NoteForm
          parentId={this.props.note.id}
          cancelNote={this.cancelReply}
          submitForm={this.submitNote} />
      );
    }

    return (
      <section className="note-index-item">
        <section className="note">
          <div className="note-details group">
            <div className="note-author-name">
              {this.props.note.author.name}
            </div>
            <div className="note-time">
              {this.props.note.time_ago}
            </div>
          </div>
          <p className="note-body">
            {this.props.note.body}
          </p>
          <ul
            className="note-interaction-links group">
            {replyButton}
            <li>
              <Icon name="thumbs-up" />
              Helpful
            </li>
          </ul>
        </section>
        {replyForm}
        {childNotes}
      </section>
    );
  }
});

module.exports = NoteIndexItem;
