var React = require('react'),
    NoteIndexItem = require('./note_index_item');


var NotesIndex = React.createClass({
  render: function () {
    var responseThread = this.props.isResponseThread ? " response-thread" : "";
    var enforceAuth = this.props.enforceAuth;
    var notes = this.props.notes.map(function(note, idx) {
      var children = note.child_notes.map(function (childNote, childIdx) {
        return (
          <NoteIndexItem
            note={childNote}
            enforceAuth={enforceAuth}
            key={childIdx} />
        )
      });
      return (
        <NoteIndexItem
          note={note}
          enforceAuth={enforceAuth}
          key={idx}
          childNotes={children} />
      );
    });
    return (
      <ul className="notes-index">
        {notes}
      </ul>
    );
  }
});

module.exports = NotesIndex;
