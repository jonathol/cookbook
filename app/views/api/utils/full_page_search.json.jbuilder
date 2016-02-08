json.recipes do
  json.array! @search_results do |recipe|
    json.partial! 'api/recipes/recipe', recipe: recipe
  end
end
