class RecipeBox < ActiveRecord::Base
  validates :user
  
  belongs_to :user
end
