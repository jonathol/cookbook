var React = require('react'),
    NoteStore = require('../stores/note'),
    NotesIndex = require('./notes_index');

var Notes = React.createClass({
  getInitialState: function () {
    return { publicNotes: [], privateNotes: [] };
  },

  componentDidMount: function () {
    this.notesListener = NoteStore.addListener(this._notesChanged);
    ApiUtil.fetchAllNotes(recipeId);
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
        <NotesIndex notes={this.state.publicNotes} />
        <NotesIndex notes={this.state.privateNotes} />
      </section>
    );
  }
});
