json.title recipe.title
# json.photo_url recipe.photo_url
json.cook_time recipe.cook_time
json.author do
  json.name recipe.author.name
  json.id recipe.author.id
end
