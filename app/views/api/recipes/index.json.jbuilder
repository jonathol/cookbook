json.header do
  json.type @owner[:type]
  json.name @owner[:name]
end

json.recipes do
  json.array! @recipes do |recipe|
    json.partial! 'api/recipes/recipe', recipe: recipe
  end
end
