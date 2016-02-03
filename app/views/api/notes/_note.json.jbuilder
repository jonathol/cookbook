json.id note.id
json.body note.body
json.recipe_id note.recipe_id
json.parent_id note.parent_id
json.private note.private
json.time_ago note.time_ago
json.likes note.likes do |note_like|
  json.id note_like.id
  json.user_id note_like.user_id
end

json.author do
  json.id note.author.id
  json.name (note.author.name || note.author.email)
end
