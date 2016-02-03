var React = require('react'),
    Icon = require('react-fontawesome');

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
        <ul
          className="note-interaction-links group">
          <li>
            <Icon name="reply" />
            Reply
          </li>
          <li>
            <Icon name="thumbs-up" />
            Helpful
          </li>
        </ul>
      </li>
    );
  }
});

module.exports = NoteIndexItem;
