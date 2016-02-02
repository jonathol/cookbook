var React = require('react'),
    NoteStore = require('../stores/note'),
    NotesIndex = require('./notes_index'),
    SessionStore = require('../stores/session'),
    ApiUtil = require('../util/api_util');

var Notes = React.createClass({
  getInitialState: function () {
    return this.getNotesFromStore();
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

  _notesChanged: function () {
    this.setState(this.getNotesFromStore());
  },

  render: function () {
    return (
      <section className="notes">
        <h4 className="recipe-bottom-details-header">
          Notes
        </h4>
        <form className="add-note-form">

        </form>
        <NotesIndex notes={this.state.publicNotes} />
        <NotesIndex notes={this.state.privateNotes} />
      </section>
    );
  }
});

module.exports = Notes;
