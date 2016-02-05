json.array! @search_results do |result|
  result = result.searchable
  if result.class == Tag
    json.extract! result, :id, :name
  else
    json.extract! result, :id, :title
    json.thumb_url result.photo.thumb_url
  end

  json._type result.class.to_s
end
