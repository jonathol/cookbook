json.title @recipe.title
# json.photo recipe.photo
json.cook_time @recipe.cook_time
json.servings @recipe.servings

json.author @recipe.author.name

# json.author do
#   json.name @recipe.author.name
#   json.id @recipe.author.id
# end

json.ingedients @recipe.ingredients do |ingredient|
  json.id ingredient.id
  json.quantity ingredient.quantity
  json.name ingredient.name
end

json.steps @recipe.steps do |step|
  json.step_number step.step_number
  json.description step.description
end
