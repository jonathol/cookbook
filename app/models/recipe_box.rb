class RecipeBox < ActiveRecord::Base
  validates :user, presence: true, uniqueness: true

  belongs_to :user
  has_many :recipe_saves
  has_many :saved_recipes, as: :recipe, through: :recipe_saves
end
