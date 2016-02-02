var React = require('react'),
    NoteStore = require('../stores/note'),
    NotesIndex = require('./notes_index'),
    NoteForm = require('./note_form'),
    ApiUtil = require('../util/api_util');

var Notes = React.createClass({
  getInitialState: function () {
    return $.extend({ formActive: false }, this.getNotesFromStore());
  },

  componentDidMount: function () {
    this.notesListener = NoteStore.addListener(this._notesChanged);
    ApiUtil.fetchAllNotes(this.props.recipeId);
  },

  componentWillUnmount: function () {
    this.notesListener.remove();
  },

  getNotesFromStore: function () {
    return {
      publicNotes: NoteStore.allPublic(),
      privateNotes: NoteStore.allPrivate()
    };
  },

  toggleForm: function (e) {
    e.preventDefault();
    if (!this.props.enforceAuth()) {
      return;
    } else if (!this.state.active) {
      this.setState({ formActive: true });
    } else {
      this.setState({ formActive: false });
    }
  },

  submitNote: function (note) {
    ApiUtil.createNote(this.props.recipeId, note);
  },

  _notesChanged: function () {
    this.setState(this.getNotesFromStore());
  },

  render: function () {
    var noteForm;
    if (this.state.formActive) {
      noteForm = (
        <NoteForm
          cancelNote={this.toggleForm}
          submitForm={this.submitNote} />
      );
    } else {
      noteForm = (
        <textarea
        className="inactive-note-form"
        placeholder="Leave a note about this recipe"
        onClick={this.handleToggleForm} />
      );
    }


    return (
      <section className="notes">
        <h4 className="recipe-bottom-details-header">
          Notes
        </h4>
        {noteForm}
        <NotesIndex notes={this.state.publicNotes} />
        <NotesIndex notes={this.state.privateNotes} />
      </section>
    );
  }
});

module.exports = Notes;
