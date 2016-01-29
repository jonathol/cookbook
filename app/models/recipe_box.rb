class RecipeBox < ActiveRecord::Base
  validates :user, presence: true, uniqueness: true

  belongs_to :user
  has_many :recipe_saves, class_name: "RecipeSave", dependent: :destroy
  has_many :saved_recipes, source: :recipe, through: :recipe_saves
end
