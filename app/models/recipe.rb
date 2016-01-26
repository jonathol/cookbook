class Recipe < ActiveRecord::Base
  validates :title, :author, presence: true

  belongs_to :author, class_name: "User"
  has_many :ingredients
  has_many :steps, class_name: "PreparationStep"
end
