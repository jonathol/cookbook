class RecipeSave < ActiveRecord::Base
  validates :recipe_box, :recipe, presence: true
  validates :recipe_id, uniqueness: { scope: :recipe_box_id }

  belongs_to :recipe_box
  belongs_to :recipe
end
