class Cook < ActiveRecord::Base
  validates :user, :recipe, presence: true
  validates :recipe_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :recipe
end
