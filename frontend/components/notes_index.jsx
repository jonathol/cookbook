var React = require('react'),
    NoteIndexItem = require('./note_index_item');


var NotesIndex = React.createClass({
  render: function () {
    var responseThread = this.props.isResponseThread ? " response-thread" : "";
    var enforceAuth = this.props.enforceAuth;
    var notes = this.props.notes.map(function(note, idx) {
      return (
        <NoteIndexItem
          note={note}
          enforceAuth={enforceAuth}
          key={idx} />
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
