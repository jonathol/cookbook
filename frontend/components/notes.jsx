var React = require('react'),
    NoteStore = require('../stores/note');

var Notes = React.createClass({
  componentDidMount: function () {
    this.notesListener = NoteStore.addListener(this._notesChanged);
    ApiUtil.fetchAllNotes(recipeId)
  },

  componentWillReceiveProps: function (newProps) {

  },

  getNotesFromStore: function () {
    NoteStore._
  },

  _notesChanged: function () {

  }
});
