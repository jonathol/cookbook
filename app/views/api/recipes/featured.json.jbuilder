json.recipe do
  json.partial! 'featured'
end

json.recipes_list do
  json.array! @recipes_list do |recipe|
    json.partial! 'recipe', recipe: recipe
  end
end
