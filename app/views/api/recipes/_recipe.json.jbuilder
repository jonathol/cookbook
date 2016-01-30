json.id recipe.id
json.title recipe.title
json.cook_time recipe.cook_time
json.author do
  json.name recipe.author.name
  json.id recipe.author.id
end
json.photo do
  json.thumb_url recipe.photo.thumb_url
end
