class Tag < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:name]

  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :recipes, through: :taggings
end
