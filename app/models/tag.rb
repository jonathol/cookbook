class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :recipes, through: :taggings
end
