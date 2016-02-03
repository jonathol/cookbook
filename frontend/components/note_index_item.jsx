var React = require('react'),
    Icon = require('react-fontawesome'),
    NoteForm = require('./note_form'),
    NotesIndex = require('./notes_index'),
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session');

var NoteIndexItem = React.createClass({
  getInitialState: function () {
    return { formActive: false, currentUserId = SessionStore.currentUser().id };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  cancelReply: function () {
    this.setState({ formActive: false });
  },

  submitNote: function (note) {
    this.setState({ formActive: false });
    ApiUtil.createNote(this.props.note.recipe_id, note);
  },

  toggleLike: function () {

  },

  toggleReply: function () {
    if (!this.props.enforceAuth()) {
      return;
    } else {
      this.setState({ formActive: true });
    }
  },

  _sessionChanged: function () {
    this.setState({ currentUserId: SessionStore.currentUser().id });
  },

  render: function () {
    var createNote = function (note) {
      var isParent = !note.parent_id;
      var noteClass = isParent ? "note" : "note child-note";
      var replyButton;
      if (isParent) {
        replyButton = (
          <li
            onClick={this.toggleReply}>
            <Icon name="reply" />
            Reply
          </li>
        );
      }
      var likeButton = (
        <li
          onClick={this.toggleLike}>
          <Icon name="thumbs-up" />
          Helpful
        </li>
      );

      return (
        <section className={noteClass}>
          <div className="note-details group">
            <div className="note-author-name">
              {note.author.name}
            </div>
            <div className="note-time">
              {note.time_ago}
            </div>
          </div>
          <p className="note-body">
            {note.body}
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
      );
    };

    var parentNote = createNote.call(this, this.props.note);

    var replyForm;
    if (this.state.formActive) {
      replyForm = (
        <NoteForm
          parentId={this.props.note.id}
          cancelNote={this.cancelReply}
          submitForm={this.submitNote} />
      );
    }

    var childNotes;
    if (this.props.note.child_notes.length > 0) {
      childNotes = this.props.note.child_notes.map(function (note, idx) {
        var child_note = createNote(note);
        return <li key={idx}>{child_note}</li>;
      });
    }

    return (
      <li className="note-index-item">
        {parentNote}
        {replyForm}
        <ul>
          {childNotes}
        </ul>
      </li>
    );
  }
});

module.exports = NoteIndexItem;
