class RecipePhoto < ActiveRecord::Base
  validates :thumb_url, :user, presence: true

  belongs_to :recipe
end
