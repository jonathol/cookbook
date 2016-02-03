json.id note.id
json.body note.body
json.recipe_id note.recipe_id
json.parent_id note.parent_id
json.private note.private
json.time_ago note.time_ago

json.numLikes note.likes.count

json.author do
  json.id note.author.id
  json.name (note.author.name || note.author.email)
end
