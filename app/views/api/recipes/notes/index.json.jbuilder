json.array! @notes do |note|
  json.id note.id
  json.body note.body
  json.recipe_id note.recipe_id
  json.parent_id note.parent_id
  json.private note.private
  json.time_ago note.time_ago
  json.author do
    json.id note.author.id
    json.name (note.author.name || note.author.email)
  end
  json.array! note.child_notes do |child_note|
    json.id child_note.id
    json.body child_note.body
    json.recipe_id child_note.recipe_id
    json.parent_id child_note.parent_id
    json.private child_note.private
    json.time_ago child_note.time_ago
    json.author do
      json.id child_note.author.id
      json.name (child_note.author.name || child_note.author.email)
  end
end
