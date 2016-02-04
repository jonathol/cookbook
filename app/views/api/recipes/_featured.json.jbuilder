json.id @recipe.id
json.title @recipe.title

json.author do
  json.name @recipe.author.name
  json.id @recipe.author.id
  json.photo_url asset_path(@recipe.author.photo.url)
end

json.description @recipe.description

json.photo do
  json.large_url @recipe.photo.large_url
  json.credit @recipe.photo.credit
end
