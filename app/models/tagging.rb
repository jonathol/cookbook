class Tagging < ActiveRecord::Base
  validates :recipe, :tag, presence: true
  validates :tag, uniqueness: { scope: :recipe }

  belongs_to :recipe
  belongs_to :tag
end
