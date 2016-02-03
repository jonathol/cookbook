json.array! @notes do |note|
  next unless note.parent_id.nil?
  json.partial! 'api/notes/note', note: note
  json.child_notes note.child_notes do |child_note|
    json.partial! 'api/notes/note', note: child_note
  end
end
