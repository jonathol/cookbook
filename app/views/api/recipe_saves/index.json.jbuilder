# json.array! @recipe_saves do |recipe_save|
#   json.id recipe_save.id
#   json.recipe_id recipe_save.recipe_id
# end
@recipe_saves.each do |recipe_save|
  json.set! recipe_save.recipe_id, recipe_save.id
end
