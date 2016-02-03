class Rating < ActiveRecord::Base
  validates :user, :recipe, :score, presence: true
  validates :score, inclusion: { in: 1..5 }
  validates :recipe_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :recipe
end
