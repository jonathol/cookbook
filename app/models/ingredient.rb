class Ingredient < ActiveRecord::Base
  validates :name, :recipe, presence: true

  belongs_to :recipe
end
