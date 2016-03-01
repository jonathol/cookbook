json.recipes do
  json.array! @recipes do |recipe|
    json.partial! 'api/recipes/recipe', recipe: recipe
  end
end
