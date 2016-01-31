@cooks.each do |cook|
  json.set! cook.recipe_id, cook.id
end
