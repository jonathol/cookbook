json.user do
  json.id @user.id
  json.name (@user.name || @user.email)
end

json.recipes do
  json.array! @recipes do |recipe|
    json.partial! 'api/recipes/recipe', recipe: recipe
  end
end
