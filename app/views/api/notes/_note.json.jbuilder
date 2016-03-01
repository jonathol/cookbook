json.id note.id
json.body note.body
json.recipe_id note.recipe_id
json.parent_id note.parent_id
json.private note.private
json.time_ago note.time_ago

json.numLikes note.likes.count

json.author do
  json.id note.author.id
  if note.author.name
    json.name /(\w+)/.match(note.author.name)[1]
  else
    json.name /(.+)@.+/.match(note.author.email)[1]
  end
  json.photo_url asset_path(note.author.photo.url)
end
