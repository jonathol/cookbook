json.user do
  json.id @user_info[:id]
  json.email @user_info[:email]
  json.name @user_info[:name]
  json.photo_url asset_path(@user_info[:photo_url])
end

json.recipe_saves @recipe_saves
json.recipe_cooks @recipe_cooks
json.ratings @ratings
json.note_likes @note_likes
