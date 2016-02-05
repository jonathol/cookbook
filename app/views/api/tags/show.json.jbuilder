json.tag do
  json.id @tag.id
  json.name @tag.name
end

json.recipes do
  json.array! @recipes do |recipe|
    json.partial! 'api/recipes/recipe', recipe: recipe
  end
end
