class RecipePhoto < ActiveRecord::Base
  validates :thumb_url, :recipe, presence: true

  belongs_to :recipe
end
