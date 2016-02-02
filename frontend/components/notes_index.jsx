var React = require('react'),
    NoteIndexItem = require('./notes_index_item');


var NotesIndex = React.createClass({
  render: function () {
    var notes = this.props.notes.map(function(note) {
      return <NoteIndexItem note={note} />;
    });
    return (
      <ul className="notes-index">

      </ul>
    );
  }
});

module.exports = NotesIndex;
