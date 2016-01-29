class RecipePhoto < ActiveRecord::Base
  validates :small_url, presence: true

  belongs_to :recipe
end
