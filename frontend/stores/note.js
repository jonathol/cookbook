var Store = require('flux/utils').Store,
    AppDispatcher = require('dispatcher/dispatcher'),
    NoteConstants = require('constants/note_constants');

_publicNotes = [];
_privateNotes = [];

var NoteStore = new Store (AppDispatcher);

NoteStore.allPublic = function () {
  return _publicNotes.slice(0);
};

NoteStore.allPrivate = function () {
  return _privateNotes.slice(0);
};

NoteStore.resetNotes = function (notes) {
  notes.forEach(function (note) {
    if (note.private) {
      _privateNotes.push(note);
    } else {
      _publicNotes.push(note);
    }
  });
};

NoteStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NoteConstants.NOTES_RECEIVED:
      this.resetNotes(payload.notes);
      break;
  }
};

module.exports = NoteStore;
