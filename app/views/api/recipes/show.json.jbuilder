json.id @recipe.id
json.title @recipe.title
json.cook_time @recipe.cook_time
json.servings @recipe.servings

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

json.tags @recipe.tags do |tag|
  json.id tag.id
  json.name tag.name
end

json.ratings do
  json.average @ratings[0].round
  json.count @ratings[1]
end

json.ingredients @recipe.ingredients do |ingredient|
  json.id ingredient.id
  json.quantity ingredient.quantity
  json.name ingredient.name
end

json.steps @recipe.steps do |step|
  json.step_number step.step_number
  json.description step.description
end
