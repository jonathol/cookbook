var React = require('react'),
    Icon = require('react-fontawesome'),
    NoteForm = require('./note_form'),
    NotesIndex = require('./notes_index'),
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session');

var NoteIndexItem = React.createClass({
  getInitialState: function () {
    return { formActive: false, currentUserId: SessionStore.currentUser().id };
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
    if (!this.props.enforceAuth()) {
      return;
    } else {
      ApiUtil.toggleNoteLike(this.props.note.id);
    }
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
    var isParent = !this.props.note.parent_id;
    var noteClass = isParent ? "" : " child-note";

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
        {this.props.note.likes.length} Helpful
      </li>
    );

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
      <li className={"note-index-item" + noteClass}>
        <section className={"note" + noteClass}>
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
            {likeButton}
          </ul>
        </section>
        {replyForm}
        <ul>
          {this.props.childNotes}
        </ul>
      </li>
    );
  }
});

module.exports = NoteIndexItem;
