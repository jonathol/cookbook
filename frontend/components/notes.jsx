var React = require('react'),
    NoteStore = require('../stores/note'),
    NotesIndex = require('./notes_index'),
    NoteForm = require('./note_form'),
    ApiUtil = require('../util/api_util');

var Notes = React.createClass({
  getInitialState: function () {
    return { formActive: false, activeIndex: 0 }
  },

  toggleForm: function () {
    if (!this.props.enforceAuth()) {
      return;
    } else if (!this.state.formActive) {
      this.setState({ formActive: true });
    } else {
      this.setState({ formActive: false });
    }
  },

  submitNote: function (note) {
    this.setState({ formActive: false });
    ApiUtil.createNote(this.props.recipeId, note);
  },

  toggleIndexTab: function (idx) {
    this.setState({ activeIndex: idx });
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
          onClick={this.toggleForm} />
      );
    }
    var notesIndex;
    switch (this.state.activeIndex) {
      case 0:
        notesIndex = (
          <NotesIndex
            notes={this.props.notes.public}
            enforceAuth={this.props.enforceAuth} />
        );
        break;
      case 1:
        notesIndex = (
          <NotesIndex
            notes={this.props.notes.private}
            enforceAuth={this.props.enforceAuth} />
        );
        break;
    }

    var activeIdx;
    var publicNotesTab;
    if (this.props.notes.public.length > 0) {
      activeIdx = this.state.activeIndex === 0 ? " active-index" : ""
      publicNotesTab = (
        <li
          className={"notes-index-tab" + activeIdx}
          onClick={this.toggleIndexTab.bind(this, 0)}>
          All <span className="note-count">{this.props.notes.public.length}</span>
        </li>
      );
    }

    var privateNotesTab;
    if (this.props.notes.private.length > 0) {
      activeIdx = this.state.activeIndex === 1 ? " active-index" : ""
      privateNotesTab = (
        <li
          className={"notes-index-tab" + activeIdx}
          onClick={this.toggleIndexTab.bind(this, 1)}>
          Private <span className="note-count">{this.props.notes.private.length}</span>
        </li>
      );
    }

    if (!publicNotesTab && !privateNotesTab) {
      notesIndex = (
        <div
          className="zero-notes">
          No one has left a note yet. Be the first!
        </div>
      )
    }

    return (
      <section className="notes">
        <h4 className="recipe-bottom-details-header">
          Notes
        </h4>
        {noteForm}
        <ul
          className="notes-index-tabs group">
          {publicNotesTab}
          {privateNotesTab}
        </ul>
        {notesIndex}
      </section>
    );
  }
});

module.exports = Notes;
