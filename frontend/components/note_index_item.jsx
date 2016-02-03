var React = require('react'),
    Icon = require('react-fontawesome'),
    NoteForm = require('./note_form'),
    NotesIndex = require('./notes_index'),
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session'),
    LikeStore = require('../stores/like');

var NoteIndexItem = React.createClass({
  getInitialState: function () {
    return {
      formActive: false,
      currentUserId: SessionStore.currentUser().id,
      numLikes: this.props.note.numLikes,
      like: LikeStore.find(this.props.note.id)
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
    this.likeListener = LikeStore.addListener(this._likesChanged);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.likeListener.remove();
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
    } else if (this.state.like) {
      ApiUtil.destroyNoteLike(this.state.like);
    } else {
      ApiUtil.createNoteLike(this.props.note.id);
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

  _likesChanged: function () {
    var newLike = LikeStore.find(this.props.note.id);
    if (newLike && !this.state.like) {
      this.setState({ numLikes: this.state.numLikes + 1});
    } else if (!newLike && this.state.like) {
      this.setState({ numLikes: this.state.numLikes - 1});
    }
    this.setState({ like: newLike });
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

    var liked = this.state.like ? " liked" : "";
    var likeButton = (
      <li
        onClick={this.toggleLike}>
        <Icon name="thumbs-up" className={liked} />
        {this.state.numLikes} Helpful
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
            <img src={this.props.note.author.photo_url} />
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
