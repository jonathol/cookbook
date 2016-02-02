var React = require('react');

var NoteIndexItem = React.createClass({
  render: function () {
    return (
      <li className="note-index-item">
        {this.props.note.author.name}
        {this.props.note.time_ago}
        {this.props.note.body}
      </li>
    );
  }
});

module.exports = NoteIndexItem;
