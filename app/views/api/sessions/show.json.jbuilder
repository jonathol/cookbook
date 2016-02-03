json.user do
  json.id current_user.id
  json.email current_user.email
  json.name current_user.name
end

json.recipe_saves @recipe_saves
json.recipe_cooks @recipe_cooks
