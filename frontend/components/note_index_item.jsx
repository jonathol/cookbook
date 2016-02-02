var React = require('react');

var NoteIndexItem = React.createClass({
  render: function () {
    return (
      <li className="note-index-item">
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
      </li>
    );
  }
});

module.exports = NoteIndexItem;
