class Recipe < ActiveRecord::Base
  validates :title, :author, presence: true

  belongs_to :author, class_name: "User"
  has_many :ingredients
  has_many :steps, class_name: "PreparationStep"
  has_many :recipe_saves, class_name: "RecipeSave", dependent: :destroy
  has_many :recipe_boxes, through: :recipe_saves
end
