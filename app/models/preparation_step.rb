class PreparationStep < ActiveRecord::Base
  validates :description, :step_number, :recipe, presence: true
  validates :step_number, uniqueness: { scope: :recipe_id }

  belongs_to :recipe
end
