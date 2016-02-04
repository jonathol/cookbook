var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    NoteConstants = require('../constants/note_constants');

var _notes = {
  public: [],
  private: []
};
var _publicNotes = [];
var _privateNotes = [];

var NoteStore = new Store (AppDispatcher);

NoteStore.all = function () {
  return $.extend({}, _notes);
};

NoteStore.allPublic = function () {
  return _publicNotes.slice(0);
};

NoteStore.allPrivate = function () {
  return _privateNotes.slice(0);
};

NoteStore.resetNotes = function (notes) {
  _notes = {
    public: [],
    private: []
  };
  notes.forEach(function (note) {
    if (note.private) {
      _notes.private.push(note);
    } else {
      _notes.public.push(note);
    }
  });
  this.__emitChange();
};

NoteStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NoteConstants.NOTES_RECEIVED:
      this.resetNotes(payload.notes);
      break;
  }
};

module.exports = NoteStore;
